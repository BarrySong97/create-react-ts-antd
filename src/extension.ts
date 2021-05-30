import * as vscode from "vscode";

import * as fs from "fs";
import * as path from "path";
const assetRootDir = path.join(__dirname, "./template");

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "create-react-fc-component.helloWorld",
    async (url) => {
      await fs.readFile(`${assetRootDir}/index.tsx`, "utf8", (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });
    }
  );

  context.subscriptions.push(disposable);
}

async function createComponent(path: string, componentName: string) {
  //   await fs.writeFileSync(
  //     `${path}/index.tsx`,
  //   );
  //   await fs.writeFileSync(
  //     `${path}/index.less`,
  //     fs.readFileSync(`${assetRootDir}/index.less`)
  //   );
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
