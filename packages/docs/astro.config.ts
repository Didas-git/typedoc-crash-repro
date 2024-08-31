/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createStarlightTypeDocPlugin } from "starlight-typedoc";
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const [createCoreDocumentation, coreDocumentationSidebar] = createStarlightTypeDocPlugin();

export default defineConfig({
    integrations: [
        starlight({
            title: "test",
            description: "this is a test",
            customCss: ["./src/styles/index.css"],
            lastUpdated: true,
            expressiveCode: {
                defaultProps: {
                    showLineNumbers: false
                }
            },
            plugins: [
                createCoreDocumentation({
                    entryPoints: ["../core/src/t.ts"],
                    output: "documentation",
                    tsconfig: "../core/tsconfig.json",
                    sidebar: {
                        label: "Documentation",
                        collapsed: true
                    },
                    typeDoc: {
                        sort: ["enum-value-ascending", "source-order"],
                        parametersFormat: "table",
                        enumMembersFormat: "table",
                        publicPath: "/documentation/"
                    }
                })
            ],
            sidebar: [
                coreDocumentationSidebar
            ]
        })
    ]
});
