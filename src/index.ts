import * as babel from "@babel/core";
import { NodePath, PluginObj } from "@babel/core";
import { MemberExpression } from "@babel/types";

const thisWoo = (t: typeof babel.types): MemberExpression => {
    return t.memberExpression(t.identifier("this"), t.identifier("woo"))
}

export default function ({ types: t }: typeof babel): PluginObj {
    return {
        name: "My cool plugin",
        visitor: {
            StringLiteral(path) {
                if (path.node.value === '$woo') {
                    path.replaceWith(thisWoo(t))
                }
            }
        }
    }
}