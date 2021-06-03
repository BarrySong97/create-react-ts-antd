import * as vscode from "vscode";

import * as fs from "fs";
import * as path from "path";
const rootDir = path.join(__dirname, "../templates");

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "create-react-fc-component.helloWorld",
    (url: any) => {
      console.log(url);

      vscode.window
        .showInputBox({
          prompt:
            "Please enter component name like component-name then I can convert it to PascalCase for you.",
        })
        .then((componentName: any) => {
          createComponent(url.path.slice(1), componentName);
        });

      // createComponent(url.path, )
    }
  );

  context.subscriptions.push(disposable);
}

async function createComponent(path: string, componentName: string) {
  try {
    const flag = await fs.existsSync(`${path}/${componentName}`);
    const indexTsx = await fs.readFileSync(`${rootDir}/index-tsx.tpl`);

    if (!flag) {
      await fs.mkdirSync(`${path}/${componentName}`);
      await fs.writeFile(
        `${path}/${componentName}/index.tsx`,
        indexTsx
          .toString()
          .replace(/ComponentName/g, replaceComponentName(componentName)),
        () => {}
      );
      await fs.writeFile(`${path}/${componentName}//index.less`, "", () => {});
    }
  } catch (err) {
    console.error(err);
  }
}

function replaceComponentName(componentName: string) {
  return componentName
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join("");
}

function replaceStyleComponentName(componentName: string) {
  return componentName
    .split("-")
    .map((s, idx) => (idx === 0 ? s : s[0].toUpperCase() + s.slice(1)))
    .join("");
}

export function deactivate() {}
