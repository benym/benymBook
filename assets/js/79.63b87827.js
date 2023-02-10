(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{406:function(s,t,a){"use strict";a.r(t);var n=a(7),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Numpy支持比Python更多的数字类型")]),s._v(" "),t("div",{staticClass:"center-container"},[t("table",[t("thead",[t("tr",[t("th",[s._v("数据类型")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("bool_")])]),s._v(" "),t("td",[s._v("布尔（True或False），存储为一个字节")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("int_")])]),s._v(" "),t("td",[s._v("默认整数类型（与C"),t("code",[s._v("long")]),s._v("相同；通常是"),t("code",[s._v("int64")]),s._v("或"),t("code",[s._v("int32")]),s._v("）")])]),s._v(" "),t("tr",[t("td",[s._v("INTC")]),s._v(" "),t("td",[s._v("与C"),t("code",[s._v("int")]),s._v("（通常为"),t("code",[s._v("int32")]),s._v("或"),t("code",[s._v("int64")]),s._v("）相同")])]),s._v(" "),t("tr",[t("td",[s._v("INTP")]),s._v(" "),t("td",[s._v("用于索引的整数（与C"),t("code",[s._v("ssize_t")]),s._v("相同；通常是"),t("code",[s._v("int32")]),s._v("或"),t("code",[s._v("int64")]),s._v("）")])]),s._v(" "),t("tr",[t("td",[s._v("INT8")]),s._v(" "),t("td",[s._v("字节（-128至127）")])]),s._v(" "),t("tr",[t("td",[s._v("INT16")]),s._v(" "),t("td",[s._v("整数（-32768至32767）")])]),s._v(" "),t("tr",[t("td",[s._v("INT32")]),s._v(" "),t("td",[s._v("整数（-2147483648至2147483647）")])]),s._v(" "),t("tr",[t("td",[s._v("Int64的")]),s._v(" "),t("td",[s._v("整数（-9223372036854775808至9223372036854775807）")])]),s._v(" "),t("tr",[t("td",[s._v("UINT8")]),s._v(" "),t("td",[s._v("无符号整数（0到255）")])]),s._v(" "),t("tr",[t("td",[s._v("UINT16")]),s._v(" "),t("td",[s._v("无符号整数（0到65535）")])]),s._v(" "),t("tr",[t("td",[s._v("UINT32")]),s._v(" "),t("td",[s._v("无符号整数（0到4294967295）")])]),s._v(" "),t("tr",[t("td",[s._v("UINT64")]),s._v(" "),t("td",[s._v("无符号整数（0到18446744073709551615）")])]),s._v(" "),t("tr",[t("td",[s._v("float_")]),s._v(" "),t("td",[t("code",[s._v("float64")]),s._v("的简写。")])]),s._v(" "),t("tr",[t("td",[s._v("float16")]),s._v(" "),t("td",[s._v("半精度浮点：符号位，5位指数，10位尾数")])]),s._v(" "),t("tr",[t("td",[s._v("FLOAT32")]),s._v(" "),t("td",[s._v("单精度浮点数：符号位，8位指数，23位尾数")])]),s._v(" "),t("tr",[t("td",[s._v("float64")]),s._v(" "),t("td",[s._v("双精度浮点：符号位，11位指数，52位尾数")])]),s._v(" "),t("tr",[t("td",[s._v("complex_")]),s._v(" "),t("td",[t("code",[s._v("complex128")]),s._v("的简写。")])]),s._v(" "),t("tr",[t("td",[s._v("complex64")]),s._v(" "),t("td",[s._v("复数，由两个32位浮点数（实部和虚部）")])]),s._v(" "),t("tr",[t("td",[s._v("complex128")]),s._v(" "),t("td",[s._v("复数，由两个64位浮点数（实部和虚部）")])])])])]),t("p",[s._v("除了"),t("code",[s._v("intc")]),s._v("之外，还定义了平台相关的C整数类型"),t("code",[s._v("short")]),s._v("，"),t("code",[s._v("long")]),s._v("，"),t("code",[s._v("longlong")]),s._v("。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("arange函数用于创建等差数组，使用频率非常高，arange非常类似range函数 ,两者的区别仅仅是arange返回的是一个数据，而range返回的是list 。要转换数组的类型，请使用.astype()方法（首选）或类型本身作为函数")])]),s._v(" "),t("h2",{attrs:{id:"代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" numpy "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" np\n\nz "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arange"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("z"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("z"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dtype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 转化数据类型为float64")]),s._v("\nfloar_arr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" z"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("astype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("float64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("floar_arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("floar_arr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dtype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果将浮点数转换为整数，则小数部分会被截断")]),s._v("\nz2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("array"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3214")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("z2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("z2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("astype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("int32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# arange的用法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arange"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arange"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h2",{attrs:{id:"运行结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行结果"}},[s._v("#")]),s._v(" 运行结果")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nint32\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nfloat64\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.1")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.2")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.3")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.4")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3214")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);