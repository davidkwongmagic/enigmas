module.exports = {

"[project]/src/app/components/PasswordGate.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PasswordGate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function PasswordGate() {
    const { login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [firstPassword, setFirstPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [secondPassword, setSecondPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [firstResult, setFirstResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [secondResult, setSecondResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showSecondChallenge, setShowSecondChallenge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showHints, setShowHints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        'hint2-1': false,
        'hint2-2': false,
        'hint2-3': false,
        'hint2-4': false
    });
    const handleFirstSubmit = (e)=>{
        e.preventDefault();
        const input = firstPassword.toUpperCase().replace(/[^A-Z]/g, '');
        const correctAnswer = "CREDITFLASHINDEXREPORT";
        setFirstResult('');
        if (input === correctAnswer) {
            setFirstResult('correct');
            setShowSecondChallenge(true);
            setTimeout(()=>{
                document.getElementById('textInputTwo')?.focus();
            }, 100);
        } else {
            setFirstResult('incorrect');
        }
    };
    const handleSecondSubmit = (e)=>{
        e.preventDefault();
        const input = secondPassword.toUpperCase().replace(/[^A-Z]/g, '');
        const correctAnswer = "WELLSPOTTED";
        setSecondResult('');
        if (input === correctAnswer) {
            setSecondResult('correct');
            setTimeout(()=>{
                login();
            }, 1500);
        } else {
            setSecondResult('incorrect');
        }
    };
    const toggleHint = (hintId)=>{
        setShowHints((prev)=>({
                ...prev,
                [hintId]: !prev[hintId]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center p-4",
        style: {
            background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 lg:p-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl lg:text-5xl font-bold text-white mb-8 font-montserrat",
                        children: "Welcome to The Menagerie"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PasswordGate.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black/20 rounded-2xl p-6 border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-white mb-4",
                                    children: "First Challenge"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-sm mb-6 leading-relaxed",
                                    children: "Please Enter The Four Answers To The Puzzles In The Playing Cards, In Alphabetical Order, No Spaces."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleFirstSubmit,
                                    className: "flex flex-col sm:flex-row gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "textInputOne",
                                            type: "text",
                                            value: firstPassword,
                                            onChange: (e)=>setFirstPassword(e.target.value),
                                            placeholder: "Enter your answer",
                                            className: "flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all",
                                            style: {
                                                boxShadow: 'focus:0 0 20px rgba(34, 197, 94, 0.3)'
                                            },
                                            autoComplete: "off"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PasswordGate.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap",
                                            children: "Submit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PasswordGate.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-xs",
                                    children: "For example, if the four answers were RED, YELLOW, GREEN, and PURPLE, you would enter GREENPURPLEREDYELLOW"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                firstResult === 'incorrect' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-400 text-2xl mr-2",
                                                children: "✗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                lineNumber: 110,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-300 font-medium",
                                                children: "SORRY, YOUR ANSWER IS INCORRECT."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                lineNumber: 111,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/PasswordGate.tsx",
                                        lineNumber: 109,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this),
                                firstResult === 'correct' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-400 text-2xl mr-2",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                lineNumber: 119,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-300 font-medium",
                                                children: "CORRECT! Please proceed to the second password."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                lineNumber: 120,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/PasswordGate.tsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/PasswordGate.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PasswordGate.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    showSecondChallenge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black/20 rounded-2xl p-6 border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-white mb-4",
                                    children: "Second Challenge"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-sm mb-6 leading-relaxed",
                                    children: "The word ENIGMA is also encoded in the bookshelves (can you figure out the code?) but that is not the password you need."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSecondSubmit,
                                    className: "flex flex-col sm:flex-row gap-3 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "textInputTwo",
                                            type: "text",
                                            value: secondPassword,
                                            onChange: (e)=>setSecondPassword(e.target.value),
                                            placeholder: "Enter your answer",
                                            className: "flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all",
                                            autoComplete: "off"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PasswordGate.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap",
                                            children: "Submit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PasswordGate.tsx",
                                            lineNumber: 146,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-xs",
                                    children: "The word ENIGMA is also secretly hidden in the deck (can you find it?), but that is not the password you need."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, this),
                                secondResult === 'incorrect' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-400 text-2xl mr-2",
                                                children: "✗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                lineNumber: 161,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-300 font-medium",
                                                children: "SORRY, YOUR ANSWER IS INCORRECT."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                lineNumber: 162,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/PasswordGate.tsx",
                                        lineNumber: 160,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                    lineNumber: 159,
                                    columnNumber: 19
                                }, this),
                                secondResult === 'correct' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-400 text-2xl mr-2",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                lineNumber: 170,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-green-300 font-medium",
                                                children: "CORRECT! Unlocking the puzzle hunt..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                lineNumber: 171,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/PasswordGate.tsx",
                                        lineNumber: 169,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                    lineNumber: 168,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-white font-semibold text-lg mb-4",
                                            children: "Need Help?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PasswordGate.tsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full text-left px-4 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-300 hover:bg-blue-500/30 transition-all",
                                                    onClick: ()=>toggleHint('hint2-1'),
                                                    children: "💡 Show Hint 1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 21
                                                }, this),
                                                showHints['hint2-1'] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-gray-800/50 rounded-lg border-l-4 border-blue-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-300 text-sm",
                                                        children: "The backs of the cards are all identical. The password can be found, in code, on the back of any card."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full text-left px-4 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-300 hover:bg-blue-500/30 transition-all",
                                                    onClick: ()=>toggleHint('hint2-2'),
                                                    children: "💡 Show Hint 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 21
                                                }, this),
                                                showHints['hint2-2'] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-gray-800/50 rounded-lg border-l-4 border-blue-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-300 text-sm",
                                                        children: "The password is encoded in a string of items that at first glance might look identical, but are not."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full text-left px-4 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-300 hover:bg-blue-500/30 transition-all",
                                                    onClick: ()=>toggleHint('hint2-3'),
                                                    children: "💡 Show Hint 3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, this),
                                                showHints['hint2-3'] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-gray-800/50 rounded-lg border-l-4 border-blue-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-300 text-sm",
                                                        children: "The circles and triangles that run around the edge of the back design can be interpreted as Morse Code: one circle = DOT and two circles = DASH. Single triangles separate the dots and dashes, and double triangles separate the letters. The message runs along the top and right side, and then is repeated along the bottom and left side."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full text-left px-4 py-3 bg-yellow-500/20 border border-yellow-500/30 rounded-xl text-yellow-300 hover:bg-yellow-500/30 transition-all",
                                                    onClick: ()=>toggleHint('hint2-4'),
                                                    children: "🎯 Show Answer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 21
                                                }, this),
                                                showHints['hint2-4'] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-gray-800/50 rounded-lg border-l-4 border-yellow-400",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-300 text-sm font-medium",
                                                        children: "The Password is WELLSPOTTED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/PasswordGate.tsx",
                                            lineNumber: 179,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PasswordGate.tsx",
                                    lineNumber: 177,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/PasswordGate.tsx",
                            lineNumber: 130,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PasswordGate.tsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PasswordGate.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/PasswordGate.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/PasswordGate.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/components/Header.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Header() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isActive = (path)=>pathname === path;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex flex-col sm:flex-row items-center justify-between py-4 sm:py-6 gap-4 sm:gap-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors font-montserrat",
                        children: "The Menagerie"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Header.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: `nav-underline font-medium transition-colors relative ${isActive('/') ? 'text-gray-700' : 'text-gray-600 hover:text-primary-600'}`,
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/answer-checker",
                                className: `nav-underline font-medium transition-colors relative ${isActive('/answer-checker') ? 'text-gray-700' : 'text-gray-600 hover:text-primary-600'}`,
                                children: "Answer Checker"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/hall-of-fame",
                                className: `nav-underline font-medium transition-colors relative ${isActive('/hall-of-fame') ? 'text-gray-700' : 'text-gray-600 hover:text-primary-600'}`,
                                children: "Hall of Fame"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/hints",
                                className: `nav-underline font-medium transition-colors relative ${isActive('/hints') ? 'text-gray-700' : 'text-gray-600 hover:text-primary-600'}`,
                                children: "Hints"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/info",
                                className: `nav-underline font-medium transition-colors relative ${isActive('/info') ? 'text-gray-700' : 'text-gray-600 hover:text-primary-600'}`,
                                children: "Info / Errata"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Header.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Header.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/Header.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Header.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/hints/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HintsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PasswordGate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/PasswordGate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const hintsData = {
    broadcasting: {
        title: "Broadcasting Studio",
        hints: [
            {
                title: "Hint 1",
                content: "This type of puzzle takes practice and persistence. Look for patterns in the lines that can reflect what the rules are. Try breaking the lines up into likely words (even if you don't know why yet), and then try to figure out the rule that makes regular words into those close-but-not-quite words. If there is a particular letter, say X, that appears every so often but looks like it does not belong, consider that a rule might be \"Add an X [before/after/as the second letter of] each word,\" or maybe \"change each second letter [or each M] to X.\" Each line is a mini-puzzle in itself."
            },
            {
                title: "Hint 2",
                content: "For example, the first item is:\nTECHNICBTESFPBEEKEEPIOFACILIU\nThis looks like a plausible way to break things up:\nTECHNICB TESFP BEEKEEPIO FACILIU\nAnd there's something going on with last letters, since it looks like it should be:\n\nTECHNIC(AL) TESF(??) BEEKEEPI(NG) FACILI(TY)\nSo, the last letter is removed, and the new last letter is moved one forward in the alphabet. That second group was not one word, but two, giving:\nTECHNICAL TERM FOR BEEKEEPING FACILITY, which is APIARY\nThen apply the rule to APIARY, changing it to APIAS, which is (for now) the answer to the first item."
            },
            {
                title: "Hint 3",
                content: "3 more rules, for 3 different lines (which ones are for you to figure out):\n\n-- Delete the first letter; then change 4th letter to R and add S to the end\n-- Reverse all but last letter, then swap first 2 letters\n-- Change H to M, N to C, and O to a copy of the letter after it"
            },
            {
                title: "Hint 4",
                content: "All the modified answers have something in common. What is it? And what does that suggest you do?"
            },
            {
                title: "Hint 5",
                content: "The modified answers are all a 1-letter change away from a 1-word television show. Look at the wrong letters and then the right letters."
            },
            {
                title: "Answer",
                content: "The answer to the puzzle is THE DEAN MARTIN SHOW. (The clue phrase is \"Program with Everybody / Loves Somebody as theme.\")"
            }
        ]
    },
    computer: {
        title: "Computer Lab",
        hints: [
            {
                title: "Hint 1",
                content: "The words for the 11 unplaced images and the answers to the 17 clues are in alphabetical order."
            },
            {
                title: "Hint 2",
                content: "The answers to the 11 unplaced images match up with the 11 empty computer screens, in some order. What might the answers to the 17 clues match up with?"
            },
            {
                title: "Hint 3",
                content: "The answers to the 17 clues match up with the 17 \"connections\" between the computer screens in the image, in some order. Note that the connections are described as \"nearly lossless\" in the introductory text."
            },
            {
                title: "Hint 4",
                content: "The answers to the 17 clues are the 17 \"connections\" between the computer screens. Each connection is made up of all the letters in both screens it connects, except that there is one letter left over (since the connection is \"nearly lossless.\" Write that leftover letter on the connection itself. You will need to use logic to determine where the images and the clue answers go."
            },
            {
                title: "Hint 5",
                content: "The image that starts out already placed in the upper-left computer screen represents FACE."
            },
            {
                title: "Hint 6",
                content: "The BRAID image (or just the word BRAID) should be placed in the screen to the right of FACE (which started in the grid). One of the clues contains the letters FACEBRAID plus one other letter -- place that extra letter in the space between the computer screens containing FACE and BRAID."
            },
            {
                title: "Hint 7",
                content: "The lower-right screen gets the word TOE."
            },
            {
                title: "Answer",
                content: "The answer to the puzzle is DENIAL OF SERVICE."
            }
        ]
    },
    fulfillment: {
        title: "Fulfillment Center",
        hints: [
            {
                title: "Introduction",
                content: "This puzzle is a cryptic crossword, a common type of puzzle whose clues are solved in a bit of a different way from standard crossword puzzles. If you are unfamiliar with how cryptic crosswords work, or want a refresher, you can find a brief introduction here: https://s.wsj.net/blogs/html/wsjcrypticguide.pdf and a more thorough discussion here: https://en.wikipedia.org/wiki/Cryptic_crossword."
            },
            {
                title: "Hint 1",
                content: "In cryptics where a letter needs to come out of certain words, it is often useful to look for words that can have a letter deleted and still remain words. In this puzzle, since the deleted-letter words then move to the end of the clue, look for words that can have a letter deleted while remaining a word, and that make sense in combination with the rest of the clue if moved to the end of the clue."
            },
            {
                title: "Hint 2",
                content: "The following clues are the \"pickup\" clues, where a word moves to the front of the clue and picks up a letter: 5A, 11A, 21A, 24A, 29A, 37A, 39A, 1D, 3D, 12D, 20D, 30D, 33D, 35D."
            },
            {
                title: "Hint 3",
                content: "The following clues are the \"drop-off\" clues, where a word moves to the end of the clue and drops off a letter: 16A, 18A, 19A, 34A, 41A, 42A, 2D, 6D, 9D, 15D, 22D, 25D, 31D, 32D."
            },
            {
                title: "Hint 4",
                content: "The answer to the word across the center of the grid (24A) is TIDIEST. It is a pickup clue, parsed as follows: [Li(k)e] The house most meticulously kept / (it is = 'TIS) around (depart = DIE) and ultimately revisit ( = T)."
            },
            {
                title: "Hint 5",
                content: "The answer to the clue word down the center of the grid (14D) is CHEWINESS. It is a standard clue, parsed as: Gummy quality / of / game infused with wine [ = CHE(WINE)SS]"
            },
            {
                title: "Hint 6",
                content: "Once all clues have been solved, the picked up and dropped off letters spell: \"Look between the / Twins in the grid.\" What are the \"twins in the grid\" that might have something between them?"
            },
            {
                title: "Hint 7",
                content: "The \"twins in the grid\" that you need to look between (based on the endgame message) are all the places in the grid where the same letter appears twice (\"twins\") across or down, with a single, different letter between it. So, for example, the B in ABA. The in-between letters, in grid order, will spell out the answer."
            },
            {
                title: "Answer",
                content: "The answer to the puzzle is FLATBED TRAILER."
            }
        ]
    },
    map: {
        title: "Map Room",
        hints: [
            {
                title: "Hint 1",
                content: "This functions similarly to a drop-quote puzzle, except using 2x2 blocks instead of single letters, and without word breaks identified. Move the blocks into the areas on each side of the grid to form 4 sets of words and phrases (they are not quotations like they would be in a typical drop-quote puzzle). Each block moves only up, down, left, or right from its initial position. The upper-case and lower-case nature of the letters do not come into play until the end of the puzzle."
            },
            {
                title: "Hint 2",
                content: "The words and phrases to the north have something in common, as do the words to the south, the east, and the west. Reread the text immediately below the title of the puzzle."
            },
            {
                title: "Hint 3",
                content: "The lengths of the words to be made in the north area are, in order: 6, 5, 6, 2, 3, 3, 6, 6, 8, 2, 9, 2, 6. You can indicate this if you want by darkening the grid line between words -- each of the 64 spaces gets a single letter. Some of the words formed should be considered grouped to make phrases (with the word or words next to it; not with a distant word). If a word reaches the end of a line without ending it wraps around to the beginning of the next line."
            },
            {
                title: "Hint 4",
                content: "The North entries are all phrases with the standalone word NORTH dropped – thus, hypothetically, MAGNETIC NORTH POLE would appear as simply MAGNETIC POLE. The East, South, and West areas follow an analogous rule. The entries in each area appear in alphabetical order."
            },
            {
                title: "Hint 5",
                content: "The lengths of the words to be made in the east, south, and west areas – with the same explanation as in hint 3 regarding the north area -- are:\nEast (reading down): 4, 2, 2, 5, 3, 4, 8, 2, 4, 6, 7, 3, 8, 2, 4\nSouth (reading across): 5, 4, 8, 9, 3, 5, 4, 10, 5, 5, 6\nWest (reading down): 4, 10, 8, 6, 2, 5, 3, 3, 3, 3, 3, 5, 4, 5"
            },
            {
                title: "Hint 6",
                content: "The first word (not necessarily a complete phrase) of the North, East, South, and West areas, respectively, are: DALLAS, BORN, BEACH, ADAM."
            },
            {
                title: "Hint 7",
                content: "After the outside areas are filled, the upper and lower cases of the letters come into play. The introductory text contains a hint in this regard."
            },
            {
                title: "Hint 8",
                content: "In the 4 outside panels, carefully shade in the squares containing capital letters (per \"bichromatic\" of the introductory text), and consider the resulting image (the original letters are at that point no longer relevant)."
            },
            {
                title: "Answer",
                content: "The answer to the puzzle is MIDTERM BREAK. (The N, E, S, W areas, when taken in 4x4 chunks, display letterforms spelling ANS =, ITRb, REAK, MdEM – when read in grid order, that's: ANS = M/I/d/T/E/R/M/b REAK.)"
            }
        ]
    },
    noah: {
        title: "Noah's Ark",
        hints: [
            {
                title: "Hint 1",
                content: "The answers to the clues are in alphabetical order. Each clue and its answer are straightforward."
            },
            {
                title: "Hint 2",
                content: "Comparing the various answers might suggest what to do with them, especially given that the theme of the puzzle is Noah's Ark."
            },
            {
                title: "Hint 3",
                content: "The clue answers fall into 2 categories: \"long\" answers and \"short\" answers. Like the animals in Noah's Ark, they should be paired up in a particular way."
            },
            {
                title: "Hint 4",
                content: "The answer to the \"URL intended to remain ...\" clue is PERMALINK."
            },
            {
                title: "Hint 5",
                content: "The answer to the \"Visual aids in the field?\" clue is BINOCULARS."
            },
            {
                title: "Hint 6",
                content: "Each long answer contains one of the short answers within it, reading left to right (but the letters are not necessarily touching). For example, the answer to the 17th clue, PERL, is found within the answer to the 18th clue, PERMALINK, in this manner: (PER)MA(L)INK. All of the answers should be paired up accordingly (not all such pairs involve clues appearing next to each other)."
            },
            {
                title: "Hint 7",
                content: "When the answers are paired up appropriately, the unused letters spell, in order, an animal, since this is Noah's Ark. Well, they spell an animal with a little left over. The introductory text tells you how to put things in the proper order."
            },
            {
                title: "Answer",
                content: "The answer to the puzzle is LIFE INSURANCE."
            }
        ]
    },
    observatory: {
        title: "Observatory",
        hints: [
            {
                title: "Hint 1",
                content: "Identify the answers to as many clues as you can. All answers are 5-letter words. All of the answers in the left grid will share a letter (which goes at the center of that grid) and all of the answers in the right grid will share a letter (which goes in the center of that grid)."
            },
            {
                title: "Hint 2",
                content: "The fact that the grids are numbered differently allows you to determine which central letter goes with which grid. In particular, answers 1 and 2 of the left grid share 4 letters, but that is not true of answers 1 and 2 in the right grid. And answers 2 and 3 in the right grid share 4 letters, but that is not true of answers 2 and 3 in the left grid (which only share 3 letters)."
            },
            {
                title: "Hint 3",
                content: "The letters in the centers of the grids are A and R (in some order). It might be easier to work on finishing one grid first, then the other."
            },
            {
                title: "Hint 4",
                content: "The answer to clue 1 in the left grid is LORRY, and its letters go into the grid, from out to in, in the order R-L-Y-O-R. The answer to clue 2 in the right grid (same relative placement as clue 1 in the left grid), is CLEAT, and its letters go into the grid, from out to in, in the order C-L-E-T-A."
            },
            {
                title: "Hint 5",
                content: "When you are done filling the grids, where might the overall answer come from? Did you notice something happening more than expected while you were filling the grids? If not, can you notice something happening by inspecting the grids now that they are filled?"
            },
            {
                title: "Hint 6",
                content: "Once the grids are filled, all you need is the outer ring of each to get the answer. (Each ring provides a different word of the 2-word answer.) As the introductory text tells you, some of the data you have collected seems to be corrupted. What data is that, and what do you get when you uncorrupt it?"
            },
            {
                title: "Answer",
                content: "The answer to the puzzle is METEOR ORBITS."
            }
        ]
    },
    restaurant: {
        title: "Restaurant",
        hints: [
            {
                title: "Hint 1",
                content: "The words in each row are presented in alphabetical order, which typically means that you will need to rearrange them in a particular way to solve things. Similarly, the rows themselves are presented in alphabetical order, which typically means you will need to rearrange the rows after you have done something with them."
            },
            {
                title: "Hint 2",
                content: "The introductory text refers to \"the entertainment audio.\" This suggests that the puzzle has something to do with sounds. You need to rearrange the words in each row and sound out the result. And keep in mind that the introductory text also says you might want to \"order\" (re-order?) a \"little extra,\" perhaps later on, so consider what that means."
            },
            {
                title: "Hint 3",
                content: "The words in each row can be reordered to sound like the names of 2 movies with something in common. One word in each row will not be used."
            },
            {
                title: "Hint 4",
                content: "For example, row 3 is:\nBEAR BUST CAME EASE HAY HEELED MALL\nThis can be re-arranged as:\nBUST HEELED HAY / MALL EASE CAME / BEAR\nGiving 2 films: Bastille Day and Molly's Game, which have something in common. The leftover word BEAR is not used now, but will be used later."
            },
            {
                title: "Hint 5",
                content: "The 2 films identified by each row have a prominent actor or actress in common, which is useful for the next step."
            },
            {
                title: "Hint 6",
                content: "Putting the leftover words in each row in the order of the last names of the performers suggested by the films of each row (the performers' last names start with the letters A-N, once each), gives:\n\nCOG DALES WHIFF GRAND BEAR EACH OOZE BOD CUT RIP HULLS EGG HANDLE I'M"
            },
            {
                title: "Answer",
                content: "The answer to the puzzle is COSMOPOLITANS. (The clue phrase sounds out: \"Cocktails with cranberry juice, vodka, Triple Sec, and lime.\")"
            }
        ]
    },
    terrarium: {
        title: "Terrarium",
        hints: [
            {
                title: "Hint 1",
                content: "The first goal is to place all the images (or, really, the words represented by the images) in the circles and all the descriptions in the boxes. There is only one way to do this so that the four descriptions in line with the image only one direction – across, down, or diagonally) match the image's word. The image represents a word – the word might match the description in a different way from the image. For example, a picture of a playing card JACK could fit the description \"helps with a spare tire.\""
            },
            {
                title: "Hint 2",
                content: "In general, try starting with finding the description that goes at the intersection of the 2 given things in each grid. And it can help to focus on descriptions that only possibly refer to a few items, or items that are only described by a small number (though always at least 4) descriptions."
            },
            {
                title: "Hint 3",
                content: "Two descriptions refer to characteristics about their items' neighbors – these can be helpful in limiting the places where certain things can, or cannot, go."
            },
            {
                title: "Hint 4",
                content: "Look for examples where a word in a description applies to its items in 2 (or even 3) different ways, as the constructor probably chose items and descriptions to make good use of multiple meanings. Though this is not always the case – in a puzzle like this, there are bound to be connections that look right, but in the end can be seen not to work. Remain flexible to various possibilities as you solve."
            },
            {
                title: "Hint 5",
                content: "The images that go in the lower left corners of the grids (in some order) are BEETLE and PEN."
            },
            {
                title: "Hint 6",
                content: "The two missing items (represented by the question marks) go in the lower right corners of the grids. Find the words they represent, which are the only words that plausibly match the 4 descriptions on the main diagonal that leads to them when the grids are correctly filled."
            },
            {
                title: "Hint 7",
                content: "The 8 descriptions corresponding to the ?s (4 for each), in some order, are: compass feature, first two letters adjacent, goes with fire, goes with match, has five letters, last letter is two later than first, odd letters for Indy item, rhymes with length of time."
            },
            {
                title: "Answer",
                content: "The answer to the puzzle is POWERPOINT."
            }
        ]
    },
    menagerie: {
        title: "The Menagerie (Metapuzzle)",
        hints: [
            {
                title: "Hint 1",
                content: "The instructions set up a puzzle type called a Star Battle. If you are unfamiliar with Star Battles, a description can be found here.\nNOTE – Hints 2-10 show how to solve the Star Battle part of this puzzle, step by step. If you want to skip directly to the solution of the Star Battle (which does not spoil the rest of the metapuzzle), you can go to Hint 10."
            },
            {
                title: "Hint 2",
                content: "The first step of solving the Star Battle is to notice that the top 4 areas of the map must have 2 stars each, and thus account for all 8 stars in the top 4 rows. Parts of other areas that invade the top 4 rows cannot have any stars. Once those spaces are removed, a star must go in the square under UND and in one of the 2 squares under GUE/STS. All squares touching the star under UND, or both of the possible squares for the other star, must not have any stars."
            },
            {
                title: "Hint 3",
                content: "After excluding all squares as in the previous hint, we see a star must go in LAB, which means the other star in that region goes in ORI or GEN, and a star must go in either LIE or the square to the left of LIE."
            },
            {
                title: "Hint 4",
                content: "Now the Bear Habitats area has only 4 spaces left for 2 stars, and since they cannot touch, they must be in BEA and either BIT or the square below it. That eliminates the rest of column 2 (which now has 2 stars), so we can place a star in ORI. In the Alligator Pit, the second column is eliminated, so there must be a star in one of RIC or ALL, and in one of ORN/ATE/TOR/PIT."
            },
            {
                title: "Hint 5",
                content: "The square to the left of PON has been eliminated by the star in one of the squares above it. Now, look at the rightmost 6 columns – 6 areas account for all 12 stars in those columns, so in the bottom center area the URE, and YSP/OTS, and the 4 squares below them cannot have any stars. We need a total of 4 stars in columns 7 and 8, and they must be in: (1) the 2x2 at the top, (2) the 2x2 under KOI in the Pond area, (3) the 3 squares under that 2x2 within the Pond section, and (4) INT or PLI. But it cannot be INT, or else we couldn't place a star in (3). So we can place a star in PLI, and eliminate the squares touching it."
            },
            {
                title: "Hint 6",
                content: "A star in PLI means there is no star in the blank space at the bottom of the central area. This means there is a starin one of EXC/ITE, and thus not a star in SUR/ETO just above it. So, there must be a star in one of PON/DIS just above that. Since we already have another star in Row 5, the rest of Row 5 is eliminated, and the second star in the Bear Habitat area must go in the empty space at the bottom of that area, eliminating more stars in the region below it. There now cannot be a star in the EXC in the center area, because it would eliminate 3 of the 5 spaces left in the Waterbock area, and we would not be able to place 2 non-touching stars there. So, we can place a star in ITE. That is 2 stars in column 7, so the 2 stars in column 6 are in one of MIT/COM and in PON."
            },
            {
                title: "Hint 7",
                content: "The star is in PON or SUR, eliminating the empty space above TAS. That forces a star in IN H (2 stars in that column now, so eliminate the rest), and in one of TAS or ONY."
            },
            {
                title: "Hint 8",
                content: "The Snakes area can be divided into a star somewhere in the 2x2 at the bottom, and one in the backwards L at the top. That accounts for exactly 1 star in the bottom 3 rows, the Alligator pit accounts for 2 more, the Oyster Bed accounts for 2 more, so there is exactly 1 star in the bottom 3 rows of Big Cat Enclosure, and thus exactly one square in the top 2 rows of Big Cat Enclosure. But the only space left in the latter is LOS, so a star goes there. And that means a star goes in TAS, and the rest of column 6 is eliminated forcing our long-ago binary star to be located in the space under GUE. And LOS and PLI are in the same row, eliminating the rest of that row, putting a star in the space above KES (which is the second star in the right column, so the rest of that column is now eliminated)."
            },
            {
                title: "Hint 9",
                content: "The second star in the Snakes area is now confined to DAN or LOC, eliminating a star in TER or BED next to those sauares. That requires a star in MAT, which in turn requires a star in DAN. There are now 2 stars in the next-to-last column, eliminating the rest of it, meaning the second star in the Sloths area must go in LIE."
            },
            {
                title: "Hint 10",
                content: "From here forward, simple eliminations and mandatory placements identify the remaining stars. The solution to the star battle is to have stars in:\n\nROW 1= ORI and OWR\nROW 2 = URN and COM\nROW 3 = LAB and LIE\nROW 4 = blank space under GUE and blank space under UND\nROW 5 = BEA and PON\nROW 6 = blank space under BIT, and DNI\nROW 7 = TAS and ITE\nROW 8 = INH and blank space under EIR\nROW 9 = LOS and PLI\nROW 10 = TAI and DAN\nROW 11 = RIC and blank space under OYS\nROW 12 – TOR and MAT"
            },
            {
                title: "Hint 11",
                content: "You have not yet used the information from the 8 \"feeder\" puzzles of the Hunt. Now seems like a good time for them to come into play. How might you use the information from the solution to the Star Battle, along with your earlier answers, to extract a message? Rereading the Introductory text might be useful."
            },
            {
                title: "Hint 12",
                content: "The star shaped displays – and you now know where they are – are described as being just to the left or right of the centers of their squares. Why not the center? What might appear on those displays that might make your earlier answers useful?"
            },
            {
                title: "Hint 13",
                content: "If the star-shaped displays are (hypothetically) showing the right letters, their squares will contain 4-letter strings consisting of: the 3 letters already in the square, and the letter on the display, and those 4-letter strings will be strings that you have seen somewhere before."
            },
            {
                title: "Hint 14",
                content: "As an example, if the first star display  -- the one in the ORI square – were to display a B, you could have the 4-letter string ORBI. And that 4 letter string appears in one of your answers ... METEOR [ORBI]TS. You can do the same thing with the rest of the star displays. For each display, there is only one letter it could show that contributes to a 4-letter string found in one of your answers."
            },
            {
                title: "Answer",
                content: "Nope! You've come all this way. You can get there from here – we have great confidence in you! But if you are really stuck at this point, send us an email and we will get you unstuck."
            }
        ]
    }
};
function HintsPage() {
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [selectedPuzzle, setSelectedPuzzle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [visibleHints, setVisibleHints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    if (!isAuthenticated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PasswordGate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/hints/page.tsx",
            lineNumber: 378,
            columnNumber: 12
        }, this);
    }
    const showHints = (puzzleName)=>{
        setSelectedPuzzle(puzzleName);
        setVisibleHints((prev)=>({
                ...prev,
                [puzzleName]: 1
            }));
    };
    const showNextHint = (puzzleName)=>{
        setVisibleHints((prev)=>({
                ...prev,
                [puzzleName]: Math.min((prev[puzzleName] || 0) + 1, hintsData[puzzleName].hints.length)
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/hints/page.tsx",
                lineNumber: 395,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold text-emerald-600 mb-6 font-montserrat",
                                        children: "Puzzle Hints"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/hints/page.tsx",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-8 leading-relaxed",
                                        children: "Click on any puzzle below to reveal progressive hints. Start with Hint 1 and work your way up if you need more help."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/hints/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: Object.entries(hintsData).map(([key, data])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>showHints(key),
                                                className: `w-full text-left p-4 border rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] ${key === 'menagerie' ? 'bg-gradient-to-r from-yellow-50 to-orange-100 hover:from-yellow-100 hover:to-orange-200 border-orange-200 text-orange-700' : 'bg-gradient-to-r from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200 border-emerald-200 text-emerald-700'}`,
                                                children: [
                                                    data.title,
                                                    " Hints"
                                                ]
                                            }, key, true, {
                                                fileName: "[project]/src/app/hints/page.tsx",
                                                lineNumber: 407,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/hints/page.tsx",
                                        lineNumber: 405,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/hints/page.tsx",
                                lineNumber: 401,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/hints/page.tsx",
                            lineNumber: 400,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300",
                                children: !selectedPuzzle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-emerald-600 mb-6 font-montserrat",
                                            children: "Select a Puzzle"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hints/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "Choose a puzzle from the left to view its hints. Hints are provided progressively - start with Hint 1 and only move to the next hint if you need more help."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hints/page.tsx",
                                            lineNumber: 429,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-emerald-600 mb-6 font-montserrat",
                                            children: hintsData[selectedPuzzle].title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hints/page.tsx",
                                            lineNumber: 435,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: hintsData[selectedPuzzle].hints.slice(0, visibleHints[selectedPuzzle] || 0).map((hint, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg font-semibold text-emerald-800 mb-3",
                                                            children: hint.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/hints/page.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700 leading-relaxed whitespace-pre-line",
                                                            children: hint.content
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/hints/page.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/app/hints/page.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hints/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 19
                                        }, this),
                                        visibleHints[selectedPuzzle] < hintsData[selectedPuzzle].hints.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>showNextHint(selectedPuzzle),
                                            className: "mt-6 w-full p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02]",
                                            children: [
                                                "Show Next Hint (",
                                                visibleHints[selectedPuzzle] + 1,
                                                "/",
                                                hintsData[selectedPuzzle].hints.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/hints/page.tsx",
                                            lineNumber: 447,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/hints/page.tsx",
                                lineNumber: 425,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/hints/page.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/hints/page.tsx",
                    lineNumber: 398,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/hints/page.tsx",
                lineNumber: 397,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/hints/page.tsx",
        lineNumber: 394,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__ca2e9c31._.js.map