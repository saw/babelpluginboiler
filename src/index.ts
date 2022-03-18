import * as babel from "@babel/core";
import {NodePath, PluginObj} from "@babel/core";

export default function ({types: t}: typeof babel): PluginObj {
    return {
        name: "My cool plugin",
        visitor: {
            StringLiteral(path)  {
                path.replaceWith(t.stringLiteral('woo'))
            }
        }
    }
}