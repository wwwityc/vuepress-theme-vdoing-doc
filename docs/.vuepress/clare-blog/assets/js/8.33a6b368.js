(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{336:function(t,s,e){"use strict";e.r(s);var n=e(7),a=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".\n├── .github   (可选，GitHub 相关文件)\n│   ├── workflows\n│   │   ├── baiduPush.yml (可选，百度定时自动推送)\n│   │   └── ci.yml (可选，自动部署)\n├── docs (必须，不要修改文件夹名称)\n│   ├── .vuepress （同官方，查看：https://vuepress.vuejs.org/zh/guide/directory-structure.html#目录结构）\n│   ├── @pages (可选，自动生成的文件夹，存放分类页、标签页、归档页)\n│   ├── _posts (可选，专门存放碎片化博客文章的文件夹)\n│   ├── <结构化目录>\n│   └── index.md (首页)\n├── vdoing (可选，本地的vdoing主题)\n├── utils  (可选，vdoing主题使用的node工具)\n│   ├── modules\n│   ├── config.yml (可选，批量操作front matter配置)\n│   ├── editFrontmatter.js (可选，批量操作front matter工具)\n├── baiduPush.sh (可选，百度推送命令脚本)\n├── deploy.sh (可选，部署命令脚本)\n│\n└── package.json\n\n")])])]),s("ul",[s("li",[s("p",[s("code",[t._v("docs")]),t._v(" 文件夹名称请不要修改")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("docs/.vuepress")]),t._v(" 用于存放全局的配置、样式、静态资源等，同官方，查看 "),s("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/directory-structure.html#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("code",[t._v("docs/@pages")]),t._v(" 此文件夹是自动生成的，存放分类页、标签页、归档页对应的"),s("code",[t._v(".md")]),t._v("文件，一般不需要改动")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("docs/_posts")]),t._v(" 专门用于存放碎片化博客文章，里面的"),s("code",[t._v(".md")]),t._v("文件不需要遵循命名约定，不会生成结构化侧边栏和目录页。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("docs/<结构化目录>")]),t._v("  请查看"),s("RouterLink",{attrs:{to:"/pages/33d574/"}},[t._v("《构建结构化站点的核心配置和约定》")]),t._v("。")],1)]),t._v(" "),s("li",[s("p",[s("code",[t._v("docs/index.md")]),t._v(" 首页")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("vdoing")]),t._v(" 存放在本地的vdoing主题文件，如果你想深度的修改主题，首先要在"),s("code",[t._v("docs/.vuepress/config.js")]),t._v("中配置使用的主题指向这个文件。")])])]),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"config.js",active:""}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// theme: 'vdoing', // npm主题依赖包")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("theme")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" require"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../vdoing'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用本地主题包")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("code-block",{attrs:{title:"config.ts"}},[s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" resolve "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" defineConfig4CustomTheme "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress/config'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" VdoingThemeConfig "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-theme-vdoing/types'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generic-function"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineConfig4CustomTheme")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VdoingThemeConfig"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// theme: 'vdoing', // 使用npm主题包")]),t._v("\n    theme"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../vdoing'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用本地主题包")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("：主题的后续维护升级只对npm主题包负责，就是说你使用本地主题就等于放弃了后续的升级服务。因此，建议能在"),s("code",[t._v("docs/.vuepress/")]),t._v("内配置和修改的，就尽量不要改动主题内部代码。")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("为了方便您更快的学习和使用本主题，我在代码当中添加了比较多的注释说明。")])])],1)}),[],!1,null,null,null);s.default=a.exports}}]);