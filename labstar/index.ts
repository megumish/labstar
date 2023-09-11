import { Declaration, Plugin, Root, Rule, parse } from "postcss"

const plugin: Plugin = {
    postcssPlugin: 'labstar',
    AtRule: {
        'labstar': atRule => {
            // const root = parse(`
            // p {
            //     color: red;
            // }`)
            // console.log(root.nodes)
            const root = new Root()
            const rule = new Rule({ selector: 'p' })
            const declaration = new Declaration({ prop: 'color', value: 'blue' })
            rule.append(declaration)
            root.append(rule)
            atRule.replaceWith(root)
        }
    },
}

export = plugin