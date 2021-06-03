import * as vscode from "vscode";

import * as fs from "fs";
import * as path from "path";
const assetRootDir = path.join(__dirname, "./template");

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
 
  console.log(path);
  
  try {
    const flag = await fs.existsSync(`${path}/${componentName}`);

    if (!flag) {
      await fs.mkdirSync(`${path}/${componentName}`);
      await fs.writeFile(`${path}/${componentName}/index.tsx`, "", () => {});
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
