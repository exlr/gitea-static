(self.webpackChunk=self.webpackChunk||[]).push([["node_modules_monaco-editor_esm_vs_basic-languages_azcli_azcli_js"],{"./node_modules/monaco-editor/esm/vs/basic-languages/azcli/azcli.js":function(o,e,n){"use strict";n.r(e),n.d(e,{conf:function(){return t},language:function(){return s}});var t={comments:{lineComment:"#"}},s={defaultToken:"keyword",ignoreCase:!0,tokenPostfix:".azcli",str:/[^#\s]/,tokenizer:{root:[{include:"@comment"},[/\s-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}],[/^-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}]],type:[{include:"@comment"},[/-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":"key.identifier"}}],[/@str+\s*/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}]],comment:[[/#.*$/,{cases:{"@eos":{token:"comment",next:"@popall"}}}]]}}}}]);
