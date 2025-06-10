(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        8312: function (e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return i(5831);
                },
            ]);
        },
        5831: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return eg;
                    },
                });
            var a = i(5893),
                s = i(1526),
                n = i(5134),
                l = i(4529),
                r = i(1559),
                o = i(782);
            let c = (0, l.Ue)()(
                    (0, o.tJ)(
                        (0, r.n)((e, t) => ({
                            overlayVisible: !1,
                            overlayContent: void 0,
                            userScrolled: !1,
                            scrollPosition: 0,
                            loaderStatus: 0,
                            setUserScrolled: (i) => {
                                i !== t().userScrolled &&
                                    e({ userScrolled: i });
                            },
                            hideOverlayVisability: () => {
                                e({ overlayVisible: !1 });
                            },
                            showOverlayVisability: (t, i) => {
                                t.preventDefault(),
                                    e({ overlayVisible: !0 }),
                                    e({ overlayContent: i });
                            },
                            setScrollPosition: (i) => {
                                i !== t().scrollPosition &&
                                    e({ scrollPosition: i });
                            },
                            setLoaderStatus: (i) => {
                                i !== t().loaderStatus &&
                                    e({ loaderStatus: i });
                            },
                        })),
                        {
                            name: "scroll-storage",
                            storage: (0, o.FL)(() => sessionStorage),
                            partialize: (e) => ({
                                scrollPosition: e.scrollPosition,
                            }),
                        }
                    )
                ),
                d = () => ({
                    width: window.innerWidth,
                    height: window.innerHeight,
                }),
                x = () => {
                    let [e] = c((e) => [e.loaderStatus]);
                    return (0, a.jsx)(s.M, {
                        children:
                            !e &&
                            (0, a.jsxs)("div", {
                                className:
                                    "fixed z-[1000001] top-0 left-0 w-full h-full flex flex-col items-center justify-center align-middle",
                                children: [
                                    (0, a.jsx)(
                                        n.E.div,
                                        {
                                            className:
                                                "absolute top-0 left-0 w-full h-full bg-monster-purple",
                                            initial: { opacity: 1 },
                                            exit: { opacity: 0 },
                                            transition: { duration: 0 },
                                        },
                                        "fallbackColor"
                                    ),
                                    (0, a.jsxs)("svg", {
                                        viewBox: "0 0 100 100",
                                        width: "100%",
                                        height: "100%",
                                        className: "absolute",
                                        children: [
                                            (0, a.jsx)("defs", {
                                                children: (0, a.jsxs)("mask", {
                                                    id: "mask",
                                                    x: "0",
                                                    y: "0",
                                                    width: "100",
                                                    height: "100",
                                                    children: [
                                                        (0, a.jsx)("rect", {
                                                            x: "-100",
                                                            y: "-100",
                                                            width: "300",
                                                            height: "300",
                                                            fill: "#fff",
                                                        }),
                                                        (0, a.jsx)(
                                                            n.E.circle,
                                                            {
                                                                cx: "50",
                                                                cy: "50",
                                                                r: "10",
                                                                initial: {
                                                                    r: 0,
                                                                },
                                                                exit: {
                                                                    r: 160,
                                                                },
                                                                transition: {
                                                                    ease: "easeInOut",
                                                                    duration: 0.8,
                                                                    delay: 0.8,
                                                                },
                                                            },
                                                            "circleAnimation"
                                                        ),
                                                    ],
                                                }),
                                            }),
                                            (0, a.jsx)("rect", {
                                                x: "-100",
                                                y: "-100",
                                                width: "300",
                                                height: "300",
                                                mask: "url(#mask)",
                                                fill: "#764af1",
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)(
                                        n.E.div,
                                        {
                                            className:
                                                "relative flex flex-col items-center justify-center align-middle",
                                            animate: { scale: 1 },
                                            initial: { scale: 0 },
                                            exit: { scale: 0 },
                                            transition: { delay: 0.35 },
                                            children: [
                                                (0, a.jsxs)("svg", {
                                                    width: "56",
                                                    height: "56",
                                                    viewBox: "0 0 56 56",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        (0, a.jsxs)("g", {
                                                            clipPath:
                                                                "url(#clip0_1491_8710)",
                                                            children: [
                                                                (0, a.jsx)(
                                                                    "path",
                                                                    {
                                                                        d: "M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z",
                                                                        fill: "white",
                                                                    }
                                                                ),
                                                                (0, a.jsx)(
                                                                    "path",
                                                                    {
                                                                        d: "M43.2548 27.9999C43.2548 36.4214 36.4213 43.2447 27.9998 43.2447C19.5783 43.2447 12.755 36.4214 12.755 27.9999C12.755 19.5784 19.5783 12.7448 27.9998 12.7448C29.1063 12.7448 30.1923 12.8678 31.227 13.0829C30.141 14.4968 29.4956 16.2589 29.4956 18.1748C29.4956 22.7748 33.2248 26.5041 37.8351 26.5041C39.751 26.5041 41.5131 25.8586 42.9167 24.7829C43.1421 25.8177 43.2548 26.8934 43.2548 27.9999Z",
                                                                        fill: "black",
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                        (0, a.jsx)("defs", {
                                                            children: (0,
                                                            a.jsx)("clipPath", {
                                                                id: "clip0_1491_8710",
                                                                children: (0,
                                                                a.jsx)("rect", {
                                                                    width: "56",
                                                                    height: "56",
                                                                    fill: "white",
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(n.E.div, {
                                                    className:
                                                        "absolute w-[94px] h-[94px]",
                                                    animate: {
                                                        rotate: [
                                                            0, 0, 180, 180, 360,
                                                        ],
                                                    },
                                                    transition: {
                                                        repeat: 1 / 0,
                                                        duration: 1.3,
                                                        times: [
                                                            0, 0.33, 0.5, 0.83,
                                                            1,
                                                        ],
                                                        ease: "circOut",
                                                    },
                                                    children: (0, a.jsx)(
                                                        "svg",
                                                        {
                                                            width: "66",
                                                            height: "18",
                                                            viewBox:
                                                                "0 0 66 18",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className:
                                                                "block m-auto rotate-180",
                                                            children: (0,
                                                            a.jsx)("path", {
                                                                d: "M1.1511 1.38497C-0.040445 2.52174 -0.0910531 4.41698 1.11898 5.53405C5.04944 9.16257 9.57613 12.0986 14.5073 14.209C20.3536 16.7112 26.6469 18.0008 33.0061 18C39.3654 17.9992 45.6583 16.7078 51.504 14.2042C56.4346 12.0925 60.9605 9.15526 64.89 5.52572C66.0998 4.40833 66.0487 2.51311 64.8568 1.37665V1.37665C63.665 0.240186 61.7845 0.294133 60.5645 1.40032C57.199 4.45188 53.3448 6.92818 49.156 8.72218C44.0521 10.9081 38.5577 12.0356 33.0054 12.0363C27.453 12.0371 21.9583 10.911 16.8538 8.7264C12.6646 6.93349 8.80974 4.4582 5.44345 1.40752C4.22317 0.301651 2.34264 0.248195 1.1511 1.38497V1.38497Z",
                                                                fill: "black",
                                                            }),
                                                        }
                                                    ),
                                                }),
                                            ],
                                        },
                                        "spinningLogo"
                                    ),
                                ],
                            }),
                    });
                };
            var p = i(163),
                h = i.n(p);
            let m = (e) => {
                    let {
                            label: t,
                            style: i = "simple_white",
                            cssClass: s = "",
                            onPress: n,
                        } = e,
                        l = h()["button_".concat(i)];
                    return (0, a.jsx)("button", {
                        onClick: n,
                        className: "".concat(l, " ").concat(s),
                        children: (0, a.jsx)("span", {
                            className: h().generic_button_typography,
                            children: t,
                        }),
                    });
                },
                u = () =>
                    (0, a.jsx)("div", {
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)("h3", {
                                    className: "text-monster-purple mb-5",
                                    children: "Start for free",
                                }),
                                (0, a.jsx)("iframe", {
                                    className:
                                        "w-full md:w-[590px] h-[700px] md:h-[680px] mb-[-30px] mx-auto border-none block",
                                    src: "https://opnform.com/forms/my-form-ot6gh7",
                                }),
                            ],
                        }),
                    }),
                f = () =>
                    /*                     (0, a.jsx)("div", {
                        children: (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)("h3", {
                                    className: "text-monster-purple mb-5",
                                    children: "Terms",
                                }),
                                (0, a.jsx)("iframe", {
                                    className:
                                        "w-full md:w-[590px] h-[700px] md:h-[680px] mb-[-30px] pb-[36px] mx-auto border-none block",
                                    src: "./terms-condition.html",
                                }),
                            ],
                        }),
                    }), */
                    (C = () =>
                        (0, a.jsx)("div", {
                            children: (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)("h3", {
                                        className: "text-monster-purple mb-5",
                                        children: "Privacy",
                                    }),
                                    (0, a.jsx)("iframe", {
                                        className:
                                            "w-full md:w-[590px] h-[700px] md:h-[680px] mb-[-30px] pb-[36px] mx-auto border-none block",
                                        src: "./privacy-policy.html",
                                    }),
                                ],
                            }),
                        }));
            var _ = i(5675),
                g = i.n(_),
                b = i(4960);
            let v = (0, n.E)(g()),
                j = () => {
                    let e = (0, b.c)(0),
                        t = (0, b.c)(0),
                        i = (0, b.c)(1),
                        s = (0, b.c)(1),
                        n = (a) => {
                            let n = a.currentTarget,
                                l = n.getBoundingClientRect(),
                                r = a.clientX - l.left,
                                o = a.clientY - l.top,
                                c = l.width / 2,
                                d = l.height / 2;
                            e.set((o - d) / 75),
                                t.set((c - r) / 75),
                                i.set(1.04),
                                s.set(1.04);
                        },
                        l = () => {
                            e.set(0), t.set(0), i.set(1), s.set(1);
                        },
                        { width: r } = d();
                    return (0, a.jsx)(v, {
                        className:
                            "transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform brightness-95 hover:brightness-100 select-none",
                        src: "/tripleboost/assets/images/overview-screenshot.webp",
                        alt: "itTest Overview Screenshot",
                        fill: !0,
                        priority: !0,
                        onMouseMove: r > 1024 ? n : void 0,
                        onMouseLeave: r > 1024 ? l : void 0,
                        style: {
                            scaleX: i,
                            scaleY: s,
                            rotateX: e,
                            rotateY: t,
                            transformPerspective: 1400,
                            objectFit: "contain",
                            transition:
                                "all 1200ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                        },
                    });
                },
                w = () => {
                    let [e, t, i, s] = c((e) => [
                            e.showOverlayVisability,
                            e.loaderStatus,
                            e.scrollPosition,
                            e.userScrolled,
                        ]),
                        l = t < 2 && 0 == i,
                        { width: r } = d(),
                        o = {
                            visible: (e) => ({
                                y: 0,
                                rotate: 0,
                                skew: 0,
                                scaleY: 1,
                                transition: {
                                    duration: 1,
                                    delay: e,
                                    type: "spring",
                                },
                            }),
                            hidden: { y: "130%", skew: -10, scaleY: 1.66 },
                        };
                    return (0, a.jsx)("div", {
                        className: "bg-monster-purple xl:min-h-screen",
                        id: "home",
                        children: (0, a.jsxs)("div", {
                            className:
                                "flex flex-col items-center justify-center align-middle",
                            children: [
                                (0, a.jsxs)("h1", {
                                    className:
                                        "heavy-header mt-[128px] md:mt-[178px] xl:mt-[190px] 2xl:mt-[218px] 3xl:mt-[26vh] px-[16px]",
                                    children: [
                                        (0, a.jsx)("span", {
                                            className:
                                                "inline-block align-top overflow-hidden",
                                            children: (0, a.jsx)(n.E.span, {
                                                className: "inline-block",
                                                variants: o,
                                                animate: l
                                                    ? "hidden"
                                                    : "visible",
                                                custom: 0.5,
                                                children: "Website,",
                                            }),
                                        }),
                                        " ",
                                        (0, a.jsx)("span", {
                                            className:
                                                "inline-block align-top overflow-hidden",
                                            children: (0, a.jsx)(n.E.span, {
                                                className: "inline-block",
                                                variants: o,
                                                animate: l
                                                    ? "hidden"
                                                    : "visible",
                                                custom: 0.55,
                                                children: "SEO,",
                                            }),
                                        }),
                                        (0, a.jsx)("span", {
                                            className:
                                                "inline-block align-top overflow-hidden",
                                            children: (0, a.jsx)(n.E.span, {
                                                className: "inline-block",
                                                variants: o,
                                                animate: l
                                                    ? "hidden"
                                                    : "visible",
                                                custom: 0.9,
                                                children: "",
                                            }),
                                        }),
                                        " ",
                                        (0, a.jsx)("span", {
                                            className:
                                                "inline-block align-top pl-[5px] ml-[-5px] overflow-hidden",
                                            children: (0, a.jsx)(n.E.span, {
                                                className: "inline-block",
                                                variants: o,
                                                animate: l
                                                    ? "hidden"
                                                    : "visible",
                                                custom: 0.95,
                                                children: "Email—Done",
                                            }),
                                        }),
                                        " ",
                                        (0, a.jsx)("span", {
                                            className:
                                                "inline-block align-top overflow-hidden",
                                            children: (0, a.jsx)(n.E.span, {
                                                className: "inline-block",
                                                variants: o,
                                                animate: l
                                                    ? "hidden"
                                                    : "visible",
                                                custom: 1,
                                                children: "for",
                                            }),
                                        }),
                                        " ",
                                        (0, a.jsx)("span", {
                                            className:
                                                "inline-block align-top pl-[50px] ml-[-50px] overflow-hidden",
                                            children: (0, a.jsx)(n.E.span, {
                                                className:
                                                    "text-shadow inline-block",
                                                variants: o,
                                                animate: l
                                                    ? "hidden"
                                                    : "visible",
                                                custom: 1.05,
                                                children: "You",
                                            }),
                                        }),
                                        (0, a.jsx)("span", {
                                            className:
                                                "inline-block align-top overflow-hidden",
                                            children: (0, a.jsx)(n.E.span, {
                                                className:
                                                    "text-shadow inline-block",
                                                variants: o,
                                                animate: l
                                                    ? "hidden"
                                                    : "visible",
                                                custom: 1.1,
                                                children: "",
                                            }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)("p", {
                                    className:
                                        "hero-paragraph opacity-90 order-3 md:order-none pt-1 md:pt-3 text-white max-w-[640px] md:max-w-[800px] 4xl:max-w-[920px] z-10",
                                    children: (0, a.jsx)(n.E.span, {
                                        className: "block",
                                        initial: { opacity: 0, y: "60%" },
                                        animate: {
                                            opacity: l ? 0 : 1,
                                            y: l ? "60%" : 0,
                                        },
                                        transition: {
                                            duration: 1,
                                            delay: r > 768 ? 1.45 : 1.85,
                                            type: "spring",
                                        },
                                        children:
                                            "We manage your website, boost your Google & ChatGPT rank, and handle all your email marketing. Simple.",
                                    }),
                                }),
                                (0, a.jsx)(n.E.div, {
                                    className: "order-4 md:order-none",
                                    initial: { opacity: 0 },
                                    animate: { opacity: l ? 0 : 1 },
                                    transition: {
                                        duration: 1,
                                        delay: r > 768 ? 1.45 : 1.85,
                                        type: "spring",
                                    },
                                    children: (0, a.jsx)(m, {
                                        cssClass:
                                            "mb-[76px] md:mb-[95px] xl:mb-[11vh] 4xl-text[22px] 4xl:leading-[22px]",
                                        label: "Get Started",
                                        style: "shadow_yellow",
                                        onPress: () => {
                                            window.location.href =
                                                "https://app.toptal.ai/sign-up-as-client#monster";
                                        },
                                    }),
                                }),
                                (0, a.jsx)(n.E.div, {
                                    className:
                                        "relative max-w-[570px] sm:max-w-[90%] lg:h-[804px] lg:w-[1360px] 4xl:w-[1640px] 4xl:h-[980px] order-2 md:order-none mt-[22px] md:mt-0 md:w-[90%] mb-[-10%] md:mb-[-20px] xl:mb-0 w-full before:content-[''] before:pt-[68%] before:block",
                                    initial: {
                                        top: l ? "6vh" : 0,
                                        opacity: l ? 0 : 1,
                                    },
                                    animate: {
                                        y:
                                            i > 0 && r > 1024
                                                ? "-2vh"
                                                : s && r > 1024
                                                ? "-2vh"
                                                : 0,
                                        scale:
                                            i > 0 || r < 1024 ? 1 : s ? 1 : 0.9,
                                        top: t >= 2 || i > 0 ? 0 : "6vh",
                                        opacity: t >= 2 || i > 0 ? 1 : 0,
                                    },
                                    transition: {
                                        type: "spring",
                                        duration: 0.7,
                                        top: {
                                            delay: r > 768 ? 1.85 : 1.45,
                                            type: "spring",
                                            duration: 0.8,
                                        },
                                        opacity: {
                                            delay: r > 768 ? 1.85 : 1.45,
                                            type: "spring",
                                            duration: 0.8,
                                        },
                                    },
                                    children: (0, a.jsx)(j, {}),
                                }),
                            ],
                        }),
                    });
                },
                y = (e) =>
                    (0, a.jsx)("div", {
                        className: ""
                            .concat(e.className, " ")
                            .concat("md:py-[120px] py-[100px]"),
                        id: "".concat(e.id),
                        onMouseMove: e.onMousePosChange,
                        children: e.children,
                    });
            var H = i(1853),
                N = i.n(H),
                k = i(1664),
                V = i.n(k),
                M = i(7294);
            let L = () =>
                    (0, a.jsxs)("svg", {
                        className: "relative mb-[-1px]",
                        width: "100%",
                        viewBox: "0 -5 460 70",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, a.jsx)("g", {
                                filter: "url(#filter0_d_110_88)",
                                children: (0, a.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: "M386.758 0C386.266 1.45942 386 3.0223 386 4.64738C386 12.6865 392.517 19.2035 400.556 19.2035C401.681 19.2035 402.775 19.076 403.827 18.8346C403.06 20.6052 402.636 22.558 402.636 24.61C402.636 32.6491 409.153 39.1661 417.192 39.1661C419.758 39.1661 422.17 38.5018 424.264 37.3357C424.397 45.2599 430.862 51.6427 438.818 51.6427C441.456 51.6427 443.93 50.9408 446.064 49.7136C446.731 56.7262 452.519 62.4026 460 63.6171V70H0V40C0 17.9086 17.9086 0 40 0H386.758Z",
                                    fill: "white",
                                }),
                            }),
                            (0, a.jsx)("defs", {
                                children: (0, a.jsxs)("filter", {
                                    id: "filter0_d_110_88",
                                    x: "-3",
                                    y: "0",
                                    width: "468",
                                    height: "79",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [
                                        (0, a.jsx)("feFlood", {
                                            floodOpacity: "0",
                                            result: "BackgroundImageFix",
                                        }),
                                        (0, a.jsx)("feColorMatrix", {
                                            in: "SourceAlpha",
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                            result: "hardAlpha",
                                        }),
                                        (0, a.jsx)("feOffset", {
                                            dx: "1",
                                            dy: "5",
                                        }),
                                        (0, a.jsx)("feGaussianBlur", {
                                            stdDeviation: "2",
                                        }),
                                        (0, a.jsx)("feComposite", {
                                            in2: "hardAlpha",
                                            operator: "out",
                                        }),
                                        (0, a.jsx)("feColorMatrix", {
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0",
                                        }),
                                        (0, a.jsx)("feBlend", {
                                            mode: "normal",
                                            in2: "BackgroundImageFix",
                                            result: "effect1_dropShadow_110_88",
                                        }),
                                        (0, a.jsx)("feBlend", {
                                            mode: "normal",
                                            in: "SourceGraphic",
                                            in2: "effect1_dropShadow_110_88",
                                            result: "shape",
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                E = () => {
                    let [e, t] = c((e) => [
                            e.showOverlayVisability,
                            e.loaderStatus,
                        ]),
                        { width: i } = d(),
                        s = {},
                        l = {};
                    i > 1024 &&
                        ((s = {
                            visible: {
                                scale: 1,
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    bounce: 0.3,
                                    duration: 0.7,
                                    delayChildren: 0.3,
                                    staggerChildren: 0.3,
                                    opacity: { duration: 0.4, bounce: 0 },
                                },
                            },
                            hidden: { scale: 0.9, opacity: 0, y: 10 },
                        }),
                        (l = {
                            visible: {
                                opacity: 1,
                                x: "0%",
                                transition: { type: "spring", duration: 0.5 },
                            },
                            hidden: (e) => ({
                                opacity: 0,
                                x: e + "%",
                                transition: { type: "spring", duration: 0.5 },
                            }),
                        }));
                    let r = (e) => {
                            window.open("mailto:".concat(e));
                        },
                        [o, x] = (0, M.useState)("recommended"),
                        p = (e, t) => Math.abs(e) * t,
                        h = {
                            type: "spring",
                            stiffness: 750,
                            damping: 75,
                            mass: 0.1,
                            opacity: { duration: 0.3 },
                        };
                    return (0, a.jsx)(y, {
                        className:
                            "bg-sunshine-yellow overflow-hidden relative z-10",
                        id: "pricing",
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [
                                (0, a.jsxs)("h2", {
                                    className: " text-midnight-blue",
                                    children: [
                                        (0, a.jsx)("span", {
                                            className: "text-shadow",
                                            children: "Fair",
                                        }),
                                        " Pricing",
                                    ],
                                }),
                                (0, a.jsx)("p", {
                                    className:
                                        "header-paragraph text-midnight-blue",
                                    children:
                                        "One clear plan. No surprises. Just the tools you need to grow.",
                                }),
                                /* (0, a.jsxs)("div", {
                                    className: N().mobile_price_selector,
                                    children: [
                                        (0, a.jsx)("span", {
                                            onClick: () => x("free"),
                                            id: "Free",
                                            className:
                                                "free" === o
                                                    ? N().selected_price
                                                    : "",
                                            children: "Free",
                                        }),
                                        (0, a.jsx)("span", {
                                            onClick: () => x("recommended"),
                                            id: "Recommended",
                                            className:
                                                "recommended" === o
                                                    ? N().selected_price
                                                    : "",
                                            children: "Monster",
                                        }),
                                        (0, a.jsx)("span", {
                                            onClick: () => x("enterprise"),
                                            id: "Enterprise",
                                            className:
                                                "enterprise" === o
                                                    ? N().selected_price
                                                    : "",
                                            children: "Mega Beast",
                                        }),
                                        (0, a.jsx)(n.E.div, {
                                            transition: { duration: 0.28 },
                                            animate: {
                                                x:
                                                    "free" === o
                                                        ? "0px"
                                                        : "recommended" === o
                                                        ? "76px"
                                                        : "190px",
                                                width:
                                                    "free" === o
                                                        ? "78px"
                                                        : "recommended" === o
                                                        ? "115px"
                                                        : "130px",
                                            },
                                            className:
                                                N()
                                                    .mobile_price_selector_container,
                                        }),
                                    ],
                                }), */
                                (0, a.jsxs)(n.E.div, {
                                    initial: "hidden",
                                    whileInView: t >= 2 ? "visible" : "hidden",
                                    viewport: {
                                        once: !0,
                                        amount: i < 1024 ? 0.2 : 0.5,
                                    },
                                    variants: s,
                                    dragSnapToOrigin: !0,

                                    drag: i < 1024 ? "x" : void 0,
                                    dragConstraints: { left: 0, right: 0 },
                                    dragElastic: 0.8,
                                    onDragEnd: (e, t) => {
                                        let { offset: i, velocity: a } = t,
                                            s = p(i.x, a.x);
                                        s < -1e4
                                            ? "recommended" === o
                                                ? x("enterprise")
                                                : "free" === o &&
                                                  x("recommended")
                                            : s > 1e4 &&
                                              ("recommended" === o
                                                  ? x("free")
                                                  : "enterprise" === o &&
                                                    x("recommended"));
                                    },
                                    transition: { duration: 0.32 },
                                    className:
                                        "flex flex-row gap-[6px] lg:gap-[1.6vw] xl:gap-[37px] items-center lg:!select-auto",
                                    children: [
                                        /* (0, a.jsx)(n.E.div, {
                                            id: "free",
                                            animate: {
                                                opacity:
                                                    "free" === o
                                                        ? 1
                                                        : i < 1024
                                                        ? 0.5
                                                        : 1,
                                                scale:
                                                    "free" === o
                                                        ? 1
                                                        : i < 1024
                                                        ? 0.94
                                                        : 1,
                                                x:
                                                    "free" === o
                                                        ? 338
                                                        : "recommended" === o
                                                        ? 0
                                                        : -338,
                                            },
                                            transition: h,
                                            children: (0, a.jsxs)(n.E.div, {
                                                variants: l,
                                                custom: 100,
                                                className:
                                                    N().free_price +
                                                    " flex flex-col items-center",
                                                children: [
                                                    (0, a.jsx)("h3", {
                                                        className:
                                                            "text-blood-red",
                                                        children:
                                                            "Starter Beast",
                                                    }),
                                                    (0, a.jsx)("p", {
                                                        className:
                                                            N().price_paragraph,
                                                        children:
                                                            "For budding brands and curious explorers. Dip your toe (or claw!) in without breaking the bank.",
                                                    }),
                                                    (0, a.jsxs)("ul", {
                                                        children: [
                                                            (0, a.jsx)("li", {
                                                                children:
                                                                    "Website Management & SEO (1 month)",
                                                            }),
                                                            (0, a.jsx)("li", {
                                                                children:
                                                                    "Email Marketing to 5,000 confirmed leads",
                                                            }),
                                                            (0, a.jsx)("li", {
                                                                children:
                                                                    "Verified, Inbox-Active Emails",
                                                            }),
                                                            (0, a.jsx)("li", {
                                                                children:
                                                                    "$49/month",
                                                            }),
                                                        ],
                                                    }),
                                                    (0, a.jsx)(m, {
                                                        label: "Start For Free",
                                                        style: "stroke_red",
                                                        cssClass: "w-full mt-7",
                                                        onPress: (t) => {
                                                            e(
                                                                t,
                                                                (0, a.jsx)(
                                                                    u,
                                                                    {}
                                                                )
                                                            );
                                                        },
                                                    }),
                                                ],
                                            }),
                                        }), */
                                        (0, a.jsx)(n.E.div, {
                                            id: "recommended",
                                            animate: {
                                                opacity:
                                                    "recommended" === o
                                                        ? 1
                                                        : i < 1024
                                                        ? 0.5
                                                        : 1,
                                                scale:
                                                    "recommended" === o
                                                        ? 1
                                                        : i < 1024
                                                        ? 0.94
                                                        : 1,
                                                x:
                                                    "free" === o
                                                        ? 338
                                                        : "recommended" === o
                                                        ? 0
                                                        : -338,
                                            },
                                            transition: h,
                                            className: "relative z-20",
                                            children: (0, a.jsxs)(n.E.div, {
                                                className:
                                                    N().recommended_price +
                                                    " flex flex-col items-center",
                                                children: [
                                                    (0, a.jsx)(L, {}),
                                                    (0, a.jsxs)("div", {
                                                        children: [
                                                            (0, a.jsx)("h3", {
                                                                className:
                                                                    "text-[35px] xl:text-[45px] mt-[-10px] text-monster-purple",
                                                                children:
                                                                    "Monster Plan",
                                                            }),
                                                            (0, a.jsx)("p", {
                                                                className:
                                                                    N()
                                                                        .price_paragraph +
                                                                    " xl:text-[22px]",
                                                                children:
                                                                    "What you get",
                                                            }),
                                                            (0, a.jsxs)("ul", {
                                                                className:
                                                                    "pb-3 max-w-[400px]",
                                                                children: [
                                                                    (0, a.jsx)(
                                                                        "li",
                                                                        {
                                                                            className:
                                                                                "xl:!text-[22px]",
                                                                            children:
                                                                                "Website care & updates—speedy, secure, and always online",
                                                                        }
                                                                    ),
                                                                    (0, a.jsx)(
                                                                        "li",
                                                                        {
                                                                            className:
                                                                                "xl:!text-[22px]",
                                                                            children:
                                                                                "SEO tuned for Google and ChatGPT answers",
                                                                        }
                                                                    ),
                                                                    (0, a.jsx)(
                                                                        "li",
                                                                        {
                                                                            className:
                                                                                "xl:!text-[22px]",
                                                                            children:
                                                                                "Email campaigns written, sent, and tracked for you ( 50K verified active emails / month )",
                                                                        }
                                                                    ),
                                                                    (0, a.jsx)(
                                                                        "li",
                                                                        {
                                                                            className:
                                                                                "xl:!text-[22px]",
                                                                            children:
                                                                                "$99/month",
                                                                        }
                                                                    ),
                                                                ],
                                                            }),
                                                            /* (0, a.jsx)("div", {
                                                                className:
                                                                    "relative h-[57px] lg:h-[71px] w-[230px] lg:w-[282px] mb-[20px] lg:mb-6 pointer-events-none",
                                                                children: (0,
                                                                a.jsx)(g(), {
                                                                    src: "/tripleboost/assets/images/recommended_price.svg",
                                                                    alt: "itTest Overview Screenshot",
                                                                    fill: !0,
                                                                    style: {
                                                                        objectFit:
                                                                            "contain",
                                                                    },
                                                                }),
                                                            }), */
                                                            (0, a.jsx)(m, {
                                                                label: "Get Started",
                                                                style: "raised_purple",
                                                                cssClass:
                                                                    "w-full",
                                                                onPress: () => {
                                                                    window.location.href =
                                                                        "https://app.toptal.ai/sign-up-as-client#monster";
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                        /* (0, a.jsx)(n.E.div, {
                                            id: "enterprise",
                                            animate: {
                                                opacity:
                                                    "enterprise" === o
                                                        ? 1
                                                        : i < 1024
                                                        ? 0.5
                                                        : 1,
                                                scale:
                                                    "enterprise" === o
                                                        ? 1
                                                        : i < 1024
                                                        ? 0.94
                                                        : 1,
                                                x:
                                                    "free" === o
                                                        ? 338
                                                        : "recommended" === o
                                                        ? 0
                                                        : -338,
                                            },
                                            transition: h,
                                            children: (0, a.jsxs)(n.E.div, {
                                                custom: -100,
                                                variants: l,
                                                className:
                                                    N().enterprise_price +
                                                    " flex flex-col items-center",
                                                children: [
                                                    (0, a.jsx)("h3", {
                                                        className:
                                                            "text-midnight-blue",
                                                        children: "Mega Beast",
                                                    }),
                                                    (0, a.jsx)("p", {
                                                        className:
                                                            N().price_paragraph,
                                                        children:
                                                            "Go all-in on monstrous growth. Ideal for established brands ready to scale big.",
                                                    }),
                                                    (0, a.jsxs)("ul", {
                                                        children: [
                                                            (0, a.jsx)("li", {
                                                                children:
                                                                    "Website Management & SEO (1 month)",
                                                            }),
                                                            (0, a.jsx)("li", {
                                                                children:
                                                                    "Email Marketing to 190,000 confirmed leads",
                                                            }),
                                                            (0, a.jsx)("li", {
                                                                children:
                                                                    "Social Media Marketing (1 month)",
                                                            }),
                                                            (0, a.jsx)("li", {
                                                                children:
                                                                    "$800/month —",
                                                            }),
                                                            (0, a.jsx)(m, {
                                                                label: "Start For Free",
                                                                style: "raised_purple",
                                                                cssClass:
                                                                    "w-full",
                                                                onPress: (
                                                                    t
                                                                ) => {
                                                                    e(
                                                                        t,
                                                                        (0,
                                                                        a.jsx)(
                                                                            u,
                                                                            {}
                                                                        )
                                                                    );
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }), */
                                    ],
                                }),
                                /*                                 (0, a.jsxs)("p", {
                                    className:
                                        "text-black max-w-[500px] px-[16px] text-center text-[17px] md:text-[19px] opacity-70 mt-16 ",
                                    children: [
                                        "Unsure which plan fits you best?",
                                        " ",
                                        (0, a.jsx)(V(), {
                                            href: "mailto:support@toptal.ai",
                                            className:
                                                "underline hover:underline-offset-4 underline-offset-2 transition-all",
                                            children: "Reach out",
                                        }),
                                        "\xa0to our team and we’ll walk you through the differences.",
                                    ],
                                }), */
                            ],
                        }),
                    });
                };
            var S = i(7094),
                F = i(6893);
            let Z = {
                    enter: (e) => {
                        let { direction: t, size: i } = e;
                        return {
                            x: t > 0 ? i.width : -i.width,
                            opacity: 0,
                            scale: 0.9,
                        };
                    },
                    left: (e) => {
                        let { size: t, mobile: i, xLarge: a } = e;
                        return {
                            zIndex: 1,
                            x: i
                                ? -t.width / 2 - 122
                                : a
                                ? -t.width / 2 - 300 + 0.1 * t.width
                                : -t.width / 1.7,
                            y: i ? "-4.5%" : 0,
                            scale: i ? 0.8 : 0.9,
                            opacity: 0.5,
                        };
                    },
                    hoverLeft: (e) => {
                        let { size: t, mobile: i, xLarge: a } = e;
                        return {
                            x: i
                                ? -t.width / 2 - 122
                                : a
                                ? -t.width / 2 - 284 + 0.1 * t.width
                                : -t.width / 1.7 + 16,
                            scale: i ? 0.8 : 0.92,
                            opacity: i ? 0.5 : 0.7,
                        };
                    },
                    exitLeft: (e) => {
                        let { size: t } = e;
                        return {
                            zIndex: 0,
                            x: -t.width,
                            opacity: 0,
                            scale: 0.9,
                            transition: { duration: 0.5 },
                        };
                    },
                    center: () => ({
                        zIndex: 2,
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                    }),
                    right: (e) => {
                        let { size: t, mobile: i, xLarge: a } = e;
                        return {
                            zIndex: 1,
                            x: i
                                ? t.width / 2 + 122
                                : a
                                ? t.width / 2 + 300 - 0.1 * t.width
                                : t.width / 1.7,
                            y: i ? "-4.5%" : 0,
                            scale: i ? 0.8 : 0.9,
                            opacity: 0.5,
                        };
                    },
                    hoverRight: (e) => {
                        let { size: t, mobile: i, xLarge: a } = e;
                        return {
                            x: i
                                ? t.width / 2 + 122
                                : a
                                ? t.width / 2 + 284 - 0.1 * t.width
                                : t.width / 1.7 - 16,
                            scale: i ? 0.8 : 0.92,
                            opacity: i ? 0.5 : 0.7,
                        };
                    },
                    exitRight: (e) => {
                        let { size: t } = e;
                        return {
                            zIndex: 0,
                            x: t.width,
                            opacity: 0,
                            scale: 0.9,
                            transition: { duration: 0.5 },
                        };
                    },
                },
                B = (e, t) => Math.abs(e) * t,
                P = (e) => {
                    let { items: t } = e,
                        [i] = c((e) => [e.loaderStatus]),
                        l = i >= 2,
                        r = d(),
                        o = r.width < 768,
                        x = r.width > 2e3,
                        p = {},
                        h = {};
                    r.width > 1024 &&
                        ((p = {
                            visible: { y: 0, opacity: 1, scale: 1 },
                            hidden: { opacity: 0, y: "20%" },
                        }),
                        (h = {
                            visible: { x: 0, opacity: 1 },
                            hidden: (e) => ({ opacity: 0, x: e + "%" }),
                        }));
                    let u = t(0, () => {}).length,
                        [[f, C], _] = (0, M.useState)([0, 0]),
                        g = (0, S.r)(0, u, f),
                        b = (0, S.r)(0, u, f + 1),
                        v = (0, S.r)(0, u, f + 2),
                        j = (e) => {
                            _([f + e, e]);
                        },
                        w = t(b + 1, j),
                        y = (0, M.useRef)(null),
                        H = (0, F.Y)(y, { amount: 0.5, once: !0 });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", {
                                className:
                                    "w-screen h-[calc(520px-20vw)] md:h-[calc(130px+36vw)] 3xl:h-[756px] 3xl:max-h-[756px]",
                                children: (0, a.jsx)(
                                    n.E.div,
                                    {
                                        ref: y,
                                        className:
                                            "h-full w-full relative lg:!select-auto",
                                        custom: { direction: C, size: r },
                                        transition: {
                                            x: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            },
                                        },
                                        drag: r.width <= 1024 && "x",
                                        dragConstraints: { left: 0, right: 0 },
                                        dragElastic: r.width <= 1024 ? 0.8 : 1,
                                        dragSnapToOrigin: !0,
                                        onDragEnd: (e, t) => {
                                            let { offset: i, velocity: a } = t,
                                                s = B(i.x, a.x);
                                            s < -1e4 ? j(1) : s > 1e4 && j(-1);
                                        },
                                        children: (0, a.jsxs)(s.M, {
                                            initial: !1,
                                            children: [
                                                (0, a.jsx)(
                                                    n.E.div,
                                                    {
                                                        custom: {
                                                            direction: C,
                                                            size: r,
                                                            mobile: o,
                                                            xLarge: x,
                                                        },
                                                        variants: Z,
                                                        initial: "enter",
                                                        animate: "left",
                                                        exit: "exitLeft",
                                                        whileHover: "hoverLeft",
                                                        transition: {
                                                            x: {
                                                                type: "spring",
                                                                stiffness: 150,
                                                                damping: 30,
                                                            },
                                                            opacity: {
                                                                duration: 0.5,
                                                            },
                                                        },
                                                        onClick: () => {
                                                            j(-1);
                                                        },
                                                        className:
                                                            "w-[90%] xl:w-[50%] ml-[5%] xl:ml-[25%] h-full absolute cursor-pointer carousel-left",
                                                        children: (0, a.jsx)(
                                                            n.E.div,
                                                            {
                                                                variants: h,
                                                                custom: -50,
                                                                initial:
                                                                    "hidden",
                                                                animate:
                                                                    H && l
                                                                        ? "visible"
                                                                        : "hidden",
                                                                transition: {
                                                                    x: {
                                                                        type: "spring",
                                                                        duration: 0.8,
                                                                        delay: 0.3,
                                                                        bounce: 0.2,
                                                                    },
                                                                    opacity: {
                                                                        duration: 0.2,
                                                                    },
                                                                },
                                                                children: w[g],
                                                            }
                                                        ),
                                                    },
                                                    f - 1
                                                ),
                                                (0, a.jsx)(
                                                    n.E.div,
                                                    {
                                                        custom: {
                                                            direction: C,
                                                            size: r,
                                                        },
                                                        variants: Z,
                                                        initial: "enter",
                                                        animate: "center",
                                                        transition: {
                                                            x: {
                                                                type: "spring",
                                                                stiffness: 150,
                                                                damping: 30,
                                                            },
                                                            opacity: {
                                                                duration: 0.2,
                                                            },
                                                        },
                                                        className:
                                                            "w-[90%] xl:w-[50%] ml-[5%] xl:ml-[25%] h-full absolute",
                                                        children: (0, a.jsx)(
                                                            n.E.div,
                                                            {
                                                                variants: p,
                                                                initial:
                                                                    "hidden",
                                                                animate:
                                                                    H && l
                                                                        ? "visible"
                                                                        : "hidden",
                                                                transition: {
                                                                    type: "spring",
                                                                    duration: 0.7,
                                                                    bounce: 0.3,
                                                                    opacity: {
                                                                        duration: 0.4,
                                                                        bounce: 0,
                                                                    },
                                                                },
                                                                children: w[b],
                                                            }
                                                        ),
                                                    },
                                                    f
                                                ),
                                                (0, a.jsx)(
                                                    n.E.div,
                                                    {
                                                        custom: {
                                                            direction: C,
                                                            size: r,
                                                            mobile: o,
                                                            xLarge: x,
                                                        },
                                                        variants: Z,
                                                        initial: "enter",
                                                        animate: "right",
                                                        exit: "exitRight",
                                                        whileHover:
                                                            "hoverRight",
                                                        transition: {
                                                            x: {
                                                                type: "spring",
                                                                stiffness: 150,
                                                                damping: 30,
                                                            },
                                                            opacity: {
                                                                duration: 0.5,
                                                            },
                                                        },
                                                        onClick: () => {
                                                            j(1);
                                                        },
                                                        className:
                                                            "w-[90%] xl:w-[50%] ml-[5%] xl:ml-[25%] h-full absolute cursor-pointer",
                                                        children: (0, a.jsx)(
                                                            n.E.div,
                                                            {
                                                                variants: h,
                                                                custom: 50,
                                                                initial:
                                                                    "hidden",
                                                                animate:
                                                                    H && l
                                                                        ? "visible"
                                                                        : "hidden",
                                                                transition: {
                                                                    x: {
                                                                        type: "spring",
                                                                        duration: 0.8,
                                                                        delay: 0.3,
                                                                        bounce: 0.2,
                                                                    },
                                                                    opacity: {
                                                                        duration: 0.2,
                                                                    },
                                                                },
                                                                children: w[v],
                                                            }
                                                        ),
                                                    },
                                                    f + 1
                                                ),
                                            ],
                                        }),
                                    },
                                    "carousel"
                                ),
                            }),
                            (0, a.jsx)("div", {
                                className:
                                    "flex flex-row justify-center gap-12 md:mt-[-2.5vw] 2xl:mt-[-3vw] 3xl:mt-[-58px] relative z-10",
                                children: (0, a.jsx)(m, {
                                    label: "Show me more",
                                    style: "raised_yellow",
                                    onPress: () => {
                                        j(1);
                                    },
                                }),
                            }),
                        ],
                    });
                };
            var A = i(5694),
                O = i.n(A);
            let I = (e) => {
                    let {
                        id: t,
                        active: i,
                        title: s,
                        description: l,
                        imageUrl: r,
                        imageAlt: o,
                    } = e;
                    return (0, a.jsx)(
                        "div",
                        {
                            className:
                                "flex flex-col justify-center items-center",
                            children: (0, a.jsxs)("div", {
                                className: O().container_wrapper,
                                children: [
                                    (0, a.jsx)("div", {
                                        className:
                                            "relative h-[250px] md:h-[36vw] 3xl:h-[600px] w-[96vw] md:w-[50vw] pointer-events-none",
                                        children: (0, a.jsx)(g(), {
                                            src: r,
                                            alt: o || "",
                                            fill: !0,
                                            style: {
                                                objectFit: "contain",
                                                zIndex: "3",
                                            },
                                        }),
                                    }),
                                    (0, a.jsxs)(n.E.div, {
                                        animate: {
                                            y: i ? "0px" : "-200px",
                                            opacity: i ? 1 : 0,
                                        },
                                        transition: {
                                            duration: 0.48,
                                            delay: 0.18,
                                            ease: [0.65, 0, 0.35, 1],
                                        },
                                        children: [
                                            s &&
                                                (0, a.jsx)("h3", {
                                                    className:
                                                        "text-sunshine-yellow text-[25px] leading-[1.27] sm:leading-[unset] md:text-[35px] md:mt-[-3.5vw] 2xl:mt-[-4vw] 3xl:mt-[-48px]",
                                                    children: s,
                                                }),
                                            l &&
                                                (0, a.jsx)("p", {
                                                    className:
                                                        "text-sunshine-yellow max-w-[710px] mt-2 text-[17px] md:text-[19px]",
                                                    children: l,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        },
                        t.toString()
                    );
                },
                z = () =>
                    (0, a.jsxs)(y, {
                        className: "bg-blood-red overflow-hidden",
                        id: "features",
                        children: [
                            (0, a.jsxs)("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    (0, a.jsxs)("h2", {
                                        className: " text-sunshine-yellow",
                                        children: [
                                            (0, a.jsx)("span", {
                                                className: "text-shadow",
                                                children: "Powerful",
                                            }),
                                            " Features",
                                        ],
                                    }),
                                    (0, a.jsx)("p", {
                                        className:
                                            "header-paragraph !mb-[28px] md:!mb-[1vw] 2xl:!mb-[0] 3xl:!mb-[24px] text-sunshine-yellow max-w-[620px]",
                                        children:
                                            "Three big jobs—one easy tool. We care for your site, lift your search rank in ChatGPT and Google, and send tons of emails that sell.",
                                    }),
                                ],
                            }),
                            (0, a.jsx)(P, {
                                items: (e, t) => [
                                    (0, a.jsx)(
                                        I,
                                        {
                                            id: 1,
                                            title: "Smooth Website Care",
                                            description:
                                                "We keep your site safe, speedy, and up to date, so you never sweat the tech.",
                                            imageUrl:
                                                "/tripleboost/assets/images/features_screenshot_services.webp",
                                            imageAlt: "Smooth Website Care",
                                            active: 1 === e,
                                        },
                                        "1"
                                    ),
                                    (0, a.jsx)(
                                        I,
                                        {
                                            id: 2,
                                            title: "Smart SEO for Google & ChatGPT",
                                            description:
                                                "We tune every page so search engines—and ChatGPT answers—put you on top.",
                                            imageUrl:
                                                "/tripleboost/assets/images/features_screenshot_invoicing.webp",
                                            imageAlt:
                                                "Smart SEO for Google & ChatGPT",
                                            active: 2 === e,
                                        },
                                        "2"
                                    ),
                                    (0, a.jsx)(
                                        I,
                                        {
                                            id: 3,
                                            title: "Email Marketing That Works",
                                            description:
                                                "We plan, write, and send emails people open and click, turning visitors into buyers.",
                                            imageUrl:
                                                "/tripleboost/assets/images/features_screenshot_customers.webp",
                                            imageAlt:
                                                "Email Marketing That Works",
                                            active: 3 === e,
                                        },
                                        "3"
                                    ),
                                    /*                                     (0, a.jsx)(
                                        I,
                                        {
                                            id: 4,
                                            title: "Flexible pricing tools",
                                            description:
                                                "Want pricing based on usage? We got you. Want free services for some users but paid for other? We got you. Want something custom for you? We got you.",
                                            imageUrl:
                                                "/tripleboost/assets/images/features_screenshot_services.webp",
                                            imageAlt:
                                                "Image showing flexible pricing tools in itTest",
                                            active: 4 === e,
                                        },
                                        "4"
                                    ), */
                                    /*                                     (0, a.jsx)(
                                        I,
                                        {
                                            id: 4,
                                            title: "…And Much More",
                                            description:
                                                "From insightful reports and user management to a playful-yet-powerful interface, Toptal Monster is always evolving. Have an idea for a new feature? We’d love to hear it—our monster’s always hungry for more.",
                                            imageUrl:
                                                "/tripleboost/assets/images/features_screenshot_users.webp",
                                            imageAlt: "…And Much More",
                                            active: 4 === e,
                                        },
                                        "4"
                                    ), */
                                ],
                            }),
                        ],
                    }),
                T = () =>
                    (0, a.jsxs)("svg", {
                        className: "relative mb-[-1px] max-w-[500px]",
                        width: "100%",
                        viewBox: "0 -5 500 90",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, a.jsx)("g", {
                                filter: "url(#filter0_d_110_86)",
                                children: (0, a.jsx)("path", {
                                    d: "M70.5945 13.8923C69.1301 14.0507 67.6864 14.0399 66.2832 13.8757C67.532 16.0594 68.3618 18.5272 68.6527 21.1831C69.7922 31.5882 62.2283 40.9413 51.7581 42.0737C48.4152 42.4353 45.1801 41.9151 42.2878 40.7008C43.2378 50.9758 35.7224 60.1478 25.3606 61.2686C21.9246 61.6402 18.6026 61.0803 15.6495 59.7926C15.7731 68.7929 9.28932 76.8222 0 79.5994V90H500V64C500 41.5979 500 30.3968 495.64 21.8404C491.805 14.3139 485.686 8.19467 478.16 4.35974C469.603 0 458.402 0 436 0H86.945C84.9534 7.31235 78.6298 13.0232 70.5945 13.8923Z",
                                    fill: "#092859",
                                }),
                            }),
                            (0, a.jsx)("defs", {
                                children: (0, a.jsxs)("filter", {
                                    id: "filter0_d_110_86",
                                    x: "-5",
                                    y: "0",
                                    width: "508",
                                    height: "99",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [
                                        (0, a.jsx)("feFlood", {
                                            floodOpacity: "0",
                                            result: "BackgroundImageFix",
                                        }),
                                        (0, a.jsx)("feColorMatrix", {
                                            in: "SourceAlpha",
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                            result: "hardAlpha",
                                        }),
                                        (0, a.jsx)("feOffset", {
                                            dx: "-1",
                                            dy: "5",
                                        }),
                                        (0, a.jsx)("feGaussianBlur", {
                                            stdDeviation: "2",
                                        }),
                                        (0, a.jsx)("feComposite", {
                                            in2: "hardAlpha",
                                            operator: "out",
                                        }),
                                        (0, a.jsx)("feColorMatrix", {
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0",
                                        }),
                                        (0, a.jsx)("feBlend", {
                                            mode: "normal",
                                            in2: "BackgroundImageFix",
                                            result: "effect1_dropShadow_110_86",
                                        }),
                                        (0, a.jsx)("feBlend", {
                                            mode: "normal",
                                            in: "SourceGraphic",
                                            in2: "effect1_dropShadow_110_86",
                                            result: "shape",
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                U = () =>
                    (0, a.jsxs)("svg", {
                        className:
                            "relative max-w-[500px] mt-[-4px] overflow-visible",
                        width: "100%",
                        viewBox: "0 20 500 106",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, a.jsx)("g", {
                                filter: "url(#filter0_ddddd_104_22)",
                                children: (0, a.jsx)("path", {
                                    d: "M500 29.5H0V45.0434C1.86068 44.7647 3.7991 44.7532 5.76481 45.0449C14.8523 46.3936 21.4993 53.7748 21.9721 62.3279C24.6748 61.2668 27.6833 60.8771 30.7614 61.334C40.0525 62.7129 46.4964 71.2873 45.2783 80.5644C47.9257 79.5654 50.8572 79.2075 53.8548 79.6524C63.2431 81.0457 69.7242 89.7859 68.3309 99.1741C67.9737 101.581 67.1333 103.798 65.9229 105.739C66.2218 105.767 66.5217 105.804 66.8221 105.849C76.2104 107.242 82.6916 115.982 81.2982 125.37C81.2669 125.582 81.2318 125.792 81.1931 126H436C458.402 126 469.603 126 478.16 121.64C485.686 117.805 491.805 111.686 495.64 104.16C500 95.603 500 84.402 500 61.9999V29.5Z",
                                    fill: "#5F3BC4",
                                }),
                            }),
                            (0, a.jsx)("path", {
                                d: "M500 0H0V30.0431C1.86069 29.7644 3.79911 29.7529 5.76483 30.0446C14.8523 31.3933 21.4993 38.7745 21.9721 47.3277C24.6748 46.2666 27.6833 45.8769 30.7614 46.3337C40.0525 47.7126 46.4964 56.2871 45.2783 65.5641C47.9257 64.5651 50.8572 64.2072 53.8548 64.6521C63.2431 66.0454 69.7243 74.7856 68.3309 84.1739C67.9737 86.5812 67.1334 88.7973 65.9229 90.7386C66.2219 90.7672 66.5217 90.8038 66.8222 90.8484C76.2104 92.2417 82.6916 100.982 81.2983 110.37C81.2669 110.581 81.2318 110.791 81.1931 111H436C458.402 111 469.603 111 478.16 106.64C485.686 102.805 491.805 96.6857 495.64 89.1592C500 80.6028 500 69.4017 500 46.9996V0Z",
                                fill: "#764AF1",
                            }),
                            (0, a.jsx)("defs", {
                                children: (0, a.jsxs)("filter", {
                                    id: "filter0_ddddd_104_22",
                                    x: "-77",
                                    y: "-14",
                                    width: "654",
                                    height: "945",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [
                                        (0, a.jsx)("feFlood", {
                                            floodOpacity: "0",
                                            result: "BackgroundImageFix",
                                        }),
                                        (0, a.jsx)("feColorMatrix", {
                                            in: "SourceAlpha",
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                            result: "hardAlpha",
                                        }),
                                        (0, a.jsx)("feOffset", {}),
                                        (0, a.jsx)("feColorMatrix", {
                                            type: "matrix",
                                            values: "0 0 0 0 0.462745 0 0 0 0 0.290196 0 0 0 0 0.945098 0 0 0 0.13 0",
                                        }),
                                        (0, a.jsx)("feBlend", {
                                            mode: "normal",
                                            in2: "BackgroundImageFix",
                                            result: "effect1_dropShadow_104_22",
                                        }),
                                        (0, a.jsx)("feColorMatrix", {
                                            in: "SourceAlpha",
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                            result: "hardAlpha",
                                        }),
                                        (0, a.jsx)("feOffset", { dy: "12" }),
                                        (0, a.jsx)("feGaussianBlur", {
                                            stdDeviation: "13",
                                        }),
                                        (0, a.jsx)("feColorMatrix", {
                                            type: "matrix",
                                            values: "0 0 0 0 0.462745 0 0 0 0 0.290196 0 0 0 0 0.945098 0 0 0 0.13 0",
                                        }),
                                        (0, a.jsx)("feBlend", {
                                            mode: "normal",
                                            in2: "effect1_dropShadow_104_22",
                                            result: "effect2_dropShadow_104_22",
                                        }),
                                        (0, a.jsx)("feColorMatrix", {
                                            in: "SourceAlpha",
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                            result: "hardAlpha",
                                        }),
                                        (0, a.jsx)("feOffset", { dy: "48" }),
                                        (0, a.jsx)("feGaussianBlur", {
                                            stdDeviation: "24",
                                        }),
                                        (0, a.jsx)("feColorMatrix", {
                                            type: "matrix",
                                            values: "0 0 0 0 0.462745 0 0 0 0 0.290196 0 0 0 0 0.945098 0 0 0 0.11 0",
                                        }),
                                        (0, a.jsx)("feBlend", {
                                            mode: "normal",
                                            in2: "effect2_dropShadow_104_22",
                                            result: "effect3_dropShadow_104_22",
                                        }),
                                        (0, a.jsx)("feColorMatrix", {
                                            in: "SourceAlpha",
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                            result: "hardAlpha",
                                        }),
                                        (0, a.jsx)("feOffset", { dy: "192" }),
                                        (0, a.jsx)("feGaussianBlur", {
                                            stdDeviation: "38.5",
                                        }),
                                        (0, a.jsx)("feColorMatrix", {
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0",
                                        }),
                                        (0, a.jsx)("feBlend", {
                                            mode: "normal",
                                            in2: "effect3_dropShadow_104_22",
                                            result: "effect4_dropShadow_104_22",
                                        }),
                                        (0, a.jsx)("feColorMatrix", {
                                            in: "SourceAlpha",
                                            type: "matrix",
                                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                            result: "hardAlpha",
                                        }),
                                        (0, a.jsx)("feOffset", { dy: "108" }),
                                        (0, a.jsx)("feGaussianBlur", {
                                            stdDeviation: "32.5",
                                        }),
                                        (0, a.jsx)("feColorMatrix", {
                                            type: "matrix",
                                            values: "0 0 0 0 0.462745 0 0 0 0 0.290196 0 0 0 0 0.945098 0 0 0 0.06 0",
                                        }),
                                        (0, a.jsx)("feBlend", {
                                            mode: "normal",
                                            in2: "effect4_dropShadow_104_22",
                                            result: "effect5_dropShadow_104_22",
                                        }),
                                        (0, a.jsx)("feBlend", {
                                            mode: "normal",
                                            in: "SourceGraphic",
                                            in2: "effect5_dropShadow_104_22",
                                            result: "shape",
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
            var R = i(3671),
                W = i.n(R);
            let X = () => {
                let [e] = c((e) => [e.loaderStatus]),
                    t = e >= 2,
                    { width: i } = d(),
                    s = {},
                    l = {};
                return (
                    i > 1024 &&
                        ((s = {
                            visible: (e) => ({
                                scale: 1,
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: "spring",
                                    bounce: 0.3,
                                    duration: 0.8,
                                    delay: e,
                                    delayChildren: e + 0.3,
                                    staggerChildren: 0.05,
                                    opacity: { duration: 0.3, bounce: 0 },
                                },
                            }),
                            hidden: { scale: 0.9, opacity: 0, y: 10 },
                        }),
                        (l = {
                            visible: {
                                opacity: 1,
                                y: "0%",
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 24,
                                },
                                clipPath: "inset(0% 0% 0% 0% round 10px)",
                            },
                            hidden: {
                                opacity: 0,
                                y: "100%",
                                clipPath: "inset(0% 0% 100% 0% round 10px)",
                            },
                        })),
                    (0, a.jsx)(y, {
                        className: "bg-[#e5ddfd] overflow-hidden",
                        id: "about",
                        children: (0, a.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [
                                (0, a.jsx)("h2", {
                                    className: " text-midnight-blue",
                                    children: "Huh, Toptal Monster?",
                                }),
                                (0, a.jsxs)("p", {
                                    className:
                                        "header-paragraph text-midnight-blue max-w-[640px] md:max-w-[820px]",
                                    children: [
                                        "Why did we build this?   Big tools were pricey and hard to use, so we built one simple place to run your website, boost your SEO, and send winning emails.",
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className:
                                        "flex lg:flex-row flex-col gap-[50px] md:gap-[2vw] px-[16px] md:px-[0px] items-stretch md:items-center text-white w-full md:w-auto",
                                    children: [
                                        (0, a.jsxs)(n.E.div, {
                                            initial: "hidden",
                                            whileInView: t
                                                ? "visible"
                                                : "hidden",
                                            viewport: { once: !0, amount: 0.5 },
                                            variants: s,
                                            custom: 0,
                                            className:
                                                W().left_container +
                                                " flex flex-col items-center relative",
                                            children: [
                                                (0, a.jsx)(T, {}),
                                                (0, a.jsxs)("div", {
                                                    className: "w-full",
                                                    children: [
                                                        (0, a.jsx)(n.E.h3, {
                                                            variants: l,
                                                            className:
                                                                "relative mt-[calc(24px-11vw)] sm:mt-[-42px] md:mt-[-34px] mb-[28px]",
                                                            children:
                                                                "What can it do?",
                                                        }),
                                                        (0, a.jsxs)(n.E.ul, {
                                                            children: [
                                                                (0, a.jsx)(
                                                                    n.E.li,
                                                                    {
                                                                        variants:
                                                                            l,
                                                                        whileHover:
                                                                            {
                                                                                scale: 1.04,
                                                                                clipPath:
                                                                                    "none",
                                                                            },
                                                                        children:
                                                                            "Keep your website fresh, fast, and safe",
                                                                    }
                                                                ),
                                                                (0, a.jsx)(
                                                                    n.E.li,
                                                                    {
                                                                        variants:
                                                                            l,
                                                                        whileHover:
                                                                            {
                                                                                scale: 1.04,
                                                                                clipPath:
                                                                                    "none",
                                                                            },
                                                                        children:
                                                                            "Lift you to the top of Google and ChatGPT results",
                                                                    }
                                                                ),
                                                                (0, a.jsx)(
                                                                    n.E.li,
                                                                    {
                                                                        variants:
                                                                            l,
                                                                        whileHover:
                                                                            {
                                                                                scale: 1.04,
                                                                                clipPath:
                                                                                    "none",
                                                                            },
                                                                        children:
                                                                            "Send emails people open and click",
                                                                    }
                                                                ),
                                                                (0, a.jsx)(
                                                                    n.E.li,
                                                                    {
                                                                        variants:
                                                                            l,
                                                                        whileHover:
                                                                            {
                                                                                scale: 1.04,
                                                                                clipPath:
                                                                                    "none",
                                                                            },
                                                                        children:
                                                                            "Show clear numbers so you see the wins",
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                        /* (0, a.jsx)("p", {
                                                            className:
                                                                W()
                                                                    .sub_paragraph,
                                                            children:
                                                                "…and more as you grow!",
                                                        }), */
                                                    ],
                                                }),
                                            ],
                                        }),
                                        (0, a.jsxs)(n.E.div, {
                                            initial: "hidden",
                                            whileInView: t
                                                ? "visible"
                                                : "hidden",
                                            viewport: { once: !0, amount: 0.5 },
                                            variants: s,
                                            custom: 0.3,
                                            className:
                                                W().right_container +
                                                " flex flex-col items-center relative",
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className:
                                                        "w-full lg:z-auto mt-[5px]",
                                                    children: [
                                                        (0, a.jsx)(n.E.h3, {
                                                            variants: l,
                                                            className:
                                                                "mb-[28px]",
                                                            children:
                                                                "Who is it for?",
                                                        }),
                                                        (0, a.jsxs)("ul", {
                                                            className:
                                                                "relative z-10",
                                                            children: [
                                                                (0, a.jsx)(
                                                                    n.E.li,
                                                                    {
                                                                        variants:
                                                                            l,
                                                                        whileHover:
                                                                            {
                                                                                scale: 1.04,
                                                                                clipPath:
                                                                                    "none",
                                                                            },
                                                                        children:
                                                                            "Start-ups that want quick growth",
                                                                    }
                                                                ),
                                                                (0, a.jsx)(
                                                                    n.E.li,
                                                                    {
                                                                        variants:
                                                                            l,
                                                                        whileHover:
                                                                            {
                                                                                scale: 1.04,
                                                                                clipPath:
                                                                                    "none",
                                                                            },
                                                                        children:
                                                                            "Local shops that need more traffic",
                                                                    }
                                                                ),
                                                                (0, a.jsx)(
                                                                    n.E.li,
                                                                    {
                                                                        variants:
                                                                            l,
                                                                        whileHover:
                                                                            {
                                                                                scale: 1.04,
                                                                                clipPath:
                                                                                    "none",
                                                                            },
                                                                        children:
                                                                            "Solo founders who dislike tech chores",
                                                                    }
                                                                ),
                                                                (0, a.jsx)(
                                                                    n.E.li,
                                                                    {
                                                                        variants:
                                                                            l,
                                                                        whileHover:
                                                                            {
                                                                                scale: 1.04,
                                                                                clipPath:
                                                                                    "none",
                                                                            },
                                                                        children:
                                                                            "Agencies juggling many clients",
                                                                    }
                                                                ),
                                                                (0, a.jsx)(
                                                                    n.E.li,
                                                                    {
                                                                        variants:
                                                                            l,
                                                                        whileHover:
                                                                            {
                                                                                scale: 1.04,
                                                                                clipPath:
                                                                                    "none",
                                                                            },
                                                                        children:
                                                                            "Anyone who wants online results without extra work",
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                        /* (0, a.jsxs)("p", {
                                                            className:
                                                                W()
                                                                    .sub_paragraph +
                                                                " mb-[-46px] md:mb-[-32px] pb-[calc(82px-15vw)] lg:pb-0 relative z-10",
                                                            children: [
                                                                "Not sure if it’s for you?",
                                                                " ",
                                                                (0, a.jsx)(
                                                                    V(),
                                                                    {
                                                                        href: "mailto:test@bh.studio?subject=Hello FM",
                                                                        className:
                                                                            "underline hover:underline-offset-4 underline-offset-2 transition-all",
                                                                        children:
                                                                            " Reach out and let’s talk!",
                                                                    }
                                                                ),
                                                                "!",
                                                            ],
                                                        }), */
                                                    ],
                                                }),
                                                (0, a.jsx)(U, {}),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            };
            var Y = i(5204),
                D = i(578);
            let q = () =>
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)(n.E.svg, {
                        className: "m-auto",
                        whileHover: "visible",
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 500 196",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, a.jsx)("path", {
                                d: "M155.884 45H189.862C190.431 45 190.809 45.4375 190.746 45.875L189.799 55.375C189.736 55.875 189.231 56.25 188.789 56.25H179.378V87.25C179.378 87.6875 178.999 88.125 178.494 88.125H167.315C166.81 88.125 166.368 87.6875 166.368 87.25V56.25H155.884C155.442 56.25 155 55.875 155 55.375V45.9375C155 45.4375 155.442 45 155.884 45Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M212.923 89C199.47 89 190.502 80 190.502 66.5625C190.502 53 199.47 44 212.923 44C226.375 44 235.343 53 235.343 66.5625C235.343 80 226.375 89 212.923 89ZM212.923 56.625C207.744 56.625 204.27 60.625 204.27 66.5625C204.27 72.5 207.744 76.5 212.923 76.5C218.101 76.5 221.575 72.5 221.575 66.5625C221.575 60.625 218.101 56.625 212.923 56.625Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M240.187 45H255.092C266.144 45 272.775 50.9375 272.775 59.875C272.775 68.8125 266.144 74.75 255.092 74.75H252.502V87.25C252.502 87.6875 252.06 88.125 251.492 88.125H240.187C239.745 88.125 239.303 87.6875 239.303 87.25V45.9375C239.303 45.4375 239.745 45 240.187 45ZM252.376 63.5625H255.66C257.87 63.5625 259.386 62.0625 259.386 59.875C259.386 57.6875 257.87 56.1875 255.66 56.1875H252.376V63.5625Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M274.055 45H308.033C308.602 45 308.98 45.4375 308.917 45.875L307.97 55.375C307.907 55.875 307.402 56.25 306.959 56.25H297.549V87.25C297.549 87.6875 297.17 88.125 296.665 88.125H285.486C284.981 88.125 284.539 87.6875 284.539 87.25V56.25H274.055C273.613 56.25 273.171 55.875 273.171 55.375V45.9375C273.171 45.4375 273.613 45 274.055 45Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M331.83 45.8125L346.103 87.3125C346.293 87.6875 346.04 88.125 345.535 88.125H333.03C332.462 88.125 331.956 87.8125 331.704 87.3125L329.809 80.75H317.936L316.041 87.3125C315.788 87.8125 315.283 88.125 314.715 88.125H302.21C301.705 88.125 301.452 87.6875 301.642 87.3125L315.915 45.8125C316.104 45.4375 316.799 45 317.431 45H330.314C330.946 45 331.641 45.4375 331.83 45.8125ZM327.283 71.8125L323.872 59.9375L320.462 71.8125H327.283Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M360.432 76.875H372.179C372.621 76.875 373 77.25 373 77.75L372.116 87.25C372.053 87.6875 371.611 88.125 371.105 88.125H348.306C347.801 88.125 347.359 87.6875 347.359 87.25V45.9375C347.359 45.4375 347.801 45 348.306 45H359.485C359.99 45 360.432 45.4375 360.432 45.9375V76.875Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M205.03 103.96C205.55 103.96 205.93 104.41 205.93 104.93V147.55C205.93 148 205.54 148.45 205.03 148.45H193.1C192.58 148.45 192.13 148 192.13 147.55V128.59L185.62 147.48C185.43 148 184.59 148.45 184.01 148.45H176.92C176.34 148.45 175.5 148 175.31 147.48L168.8 128.59V147.55C168.8 148 168.35 148.45 167.83 148.45H155.9C155.38 148.45 155 148 155 147.55V104.93C155 104.41 155.39 103.96 155.9 103.96H169.38C170.22 103.96 171.19 104.54 171.57 105.25L180.47 129.88L189.37 105.25C189.76 104.54 190.72 103.96 191.56 103.96H205.03Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M236.19 149.35C222.46 149.35 213.3 140.07 213.3 126.2C213.3 112.21 222.46 102.93 236.19 102.93C249.92 102.93 259.08 112.21 259.08 126.2C259.08 140.06 249.92 149.35 236.19 149.35ZM236.19 115.95C230.9 115.95 227.36 120.08 227.36 126.2C227.36 132.33 230.91 136.45 236.19 136.45C241.48 136.45 245.02 132.32 245.02 126.2C245.03 120.08 241.48 115.95 236.19 115.95Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M303.37 103.96C303.95 103.96 304.34 104.41 304.34 104.93V147.55C304.34 148 303.95 148.45 303.37 148.45H292.22C291.77 148.45 291.19 148.13 290.87 147.61L279.65 127.56V147.55C279.65 148 279.26 148.45 278.68 148.45H267.27C266.75 148.45 266.37 148 266.37 147.55V104.93C266.37 104.41 266.76 103.96 267.27 103.96H278.42C279 103.96 279.64 104.28 279.9 104.8L291.05 124.85V104.93C291.05 104.41 291.5 103.96 291.95 103.96H303.37Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M315.75 134.91C315.94 134.27 316.39 134.07 316.91 134.4C319.88 136.08 323.42 137.3 325.87 137.49C327.93 137.49 329.29 136.52 329.29 135.04C329.29 131.24 311.17 131.43 311.17 117.38C311.17 108.74 317.68 103 327.48 103C332.06 103 337.86 104.87 341.92 107.64C342.44 107.96 342.63 108.48 342.44 108.8L338.38 117.89C338.19 118.53 337.74 118.73 337.22 118.4C334.06 116.6 330.39 115.24 328.13 115.05C326.13 115.05 324.84 115.95 324.84 117.37C324.84 121.17 343.09 120.92 343.09 135.1C343.09 143.67 336.45 149.41 326.52 149.41C321.1 149.41 315.43 147.73 312.21 145.16C311.69 144.77 311.5 144.32 311.69 144L315.75 134.91Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M383.19 103.96C383.77 103.96 384.16 104.41 384.09 104.86L383.12 114.66C383.06 115.18 382.54 115.56 382.09 115.56H372.48V147.54C372.48 147.99 372.09 148.44 371.58 148.44H360.17C359.65 148.44 359.2 147.99 359.2 147.54V115.56H348.5C348.05 115.56 347.6 115.17 347.6 114.66V104.92C347.6 104.4 348.05 103.95 348.5 103.95H383.19V103.96Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M420.52 136.84C421.04 136.84 421.49 137.23 421.49 137.68V147.54C421.49 147.99 421.04 148.44 420.52 148.44H390.54C390.09 148.44 389.64 147.92 389.51 147.47V104.85C389.51 104.27 389.83 103.95 390.41 103.95H419.74C420.32 103.95 420.77 104.4 420.77 104.85V114.58C420.77 115.16 420.32 115.55 419.74 115.55H402.91V120.64H416.58C417.16 120.64 417.48 121.09 417.42 121.48L416.52 130.51C416.46 130.9 416 131.35 415.42 131.35H402.91V136.83H420.52V136.84Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M465.13 147.41C465.45 147.99 465 148.44 464.42 148.44H450.62C449.98 148.44 449.39 147.99 449.14 147.41L442.44 133.36H441.67V147.54C441.67 147.99 441.22 148.44 440.64 148.44H429.29C428.77 148.44 428.32 147.99 428.32 147.54V104.92C428.32 104.4 428.77 103.95 429.29 103.95H446.31C456.24 103.95 462.81 109.75 462.81 118.52C462.81 123.61 459.72 128.77 454.88 130.83L465.13 147.41ZM445.47 122.4C447.66 122.4 449.14 121.05 449.14 118.98C449.14 116.92 447.66 115.56 445.47 115.56H441.67V122.39H445.47V122.4Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M104.362 160.588H36.3561C23.5526 160.588 13.1822 150.217 13.1822 137.414V65.5288C13.1822 58.6185 16.2634 52.0672 21.5882 47.6697L55.5913 19.5599C64.1569 12.48 76.5516 12.48 85.1172 19.5599L119.12 47.6697C124.445 52.0672 127.526 58.6185 127.526 65.5288V137.414C127.536 150.207 117.166 160.588 104.362 160.588Z",
                                fill: "#764AF1",
                            }),
                            (0, a.jsxs)(n.E.g, {
                                variants: {
                                    visible: {
                                        rotate: 360,
                                        transition: {
                                            rotate: {
                                                repeat: 1 / 0,
                                                duration: 1.7,
                                                ease: "backOut",
                                            },
                                        },
                                    },
                                },
                                transition: { ease: "linear" },
                                style: { transformOrigin: "center" },
                                children: [
                                    (0, a.jsx)("path", {
                                        d: "M70.3593 105.694C85.4103 105.694 97.6116 93.4933 97.6116 78.4422C97.6116 63.3912 85.4103 51.1899 70.3593 51.1899C55.3082 51.1899 43.1069 63.3912 43.1069 78.4422C43.1069 93.4933 55.3082 105.694 70.3593 105.694Z",
                                        fill: "white",
                                    }),
                                    (0, a.jsx)(n.E.path, {
                                        d: "M85.2069 78.4419C85.2069 86.6386 78.5558 93.2796 70.3592 93.2796C62.1626 93.2796 55.5215 86.6386 55.5215 78.4419C55.5215 70.2453 62.1626 63.5942 70.3592 63.5942C71.4361 63.5942 72.4931 63.7139 73.5003 63.9233C72.4433 65.2994 71.8151 67.0145 71.8151 68.8792C71.8151 73.3564 75.4447 76.9861 79.9319 76.9861C81.7966 76.9861 83.5117 76.3579 84.8778 75.3108C85.0972 76.318 85.2069 77.365 85.2069 78.4419Z",
                                        fill: "black",
                                        variants: {
                                            visible: {
                                                rotate: -360,
                                                x: 10,
                                                transition: {
                                                    rotate: {
                                                        repeat: 1 / 0,
                                                        duration: 1.7,
                                                        ease: "backOut",
                                                    },
                                                },
                                            },
                                        },
                                        transition: { ease: "linear" },
                                    }),
                                ],
                            }),
                            (0, a.jsx)("path", {
                                d: "M87.8992 124.341L99.2269 134.472C99.7953 134.981 99.6059 135.918 98.8779 136.167L76.2923 143.596C75.5644 143.836 74.8464 143.197 75.006 142.45L78.1071 127.572C79.0445 123.085 84.479 121.29 87.8992 124.341Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M70.3592 144.165C58.5529 144.165 47.1554 141.642 36.4957 136.666C34.9801 135.958 34.3219 134.153 35.0299 132.628C35.7379 131.102 37.5428 130.444 39.0684 131.162C48.9203 135.759 59.4503 138.092 70.3692 138.092C81.2881 138.092 91.818 135.759 101.67 131.162C103.196 130.454 105 131.112 105.708 132.628C106.416 134.143 105.758 135.958 104.243 136.666C93.5631 141.642 82.1755 144.165 70.3592 144.165Z",
                                fill: "black",
                            }),
                        ],
                    }),
                });
            var G = i(6260);
            let J = () => {
                    let { scrollY: e } = (0, Y.v)(),
                        { width: t } = d(),
                        [i, l] = (0, M.useState)([]),
                        [r, o] = (0, M.useState)(0),
                        c = 0,
                        x = 0,
                        p = (t) => {
                            let a = t.pageX,
                                s = t.pageY - e.get();
                            if (0 === c || 0 === x) return (c = a), (x = s), !1;
                            let n = Math.sqrt(
                                Math.pow(a - c, 2) + Math.pow(s - x, 2)
                            );
                            n > 50 &&
                                (o(r + 1),
                                i.splice(0),
                                l([
                                    ...i,
                                    {
                                        id: r,
                                        left: a,
                                        top: s,
                                        rotation:
                                            "rotate(" +
                                            -Math.atan2(c - a, x - s) +
                                            "rad)",
                                    },
                                ]));
                        };
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", {
                                className: "w-full h-full absolute top-0",
                                onMouseMove: p,
                            }),
                            (0, a.jsx)(s.M, {
                                children: i.map((e) =>
                                    t > 1024
                                        ? (0, a.jsx)(
                                              n.E.div,
                                              {
                                                  animate: {
                                                      opacity: [
                                                          0, 100, 100, 100, 0,
                                                      ],
                                                      transition: {
                                                          easing: G.mZ,
                                                          duration: 1.5,
                                                      },
                                                  },
                                                  exit: {
                                                      opacity: 0,
                                                      transition: {
                                                          easing: G.mZ,
                                                          duration: 0.4,
                                                          delay: 0.8,
                                                      },
                                                  },
                                                  className:
                                                      "fixed w-[58px] h-[61px] bottom-0",
                                                  style: {
                                                      left: e.left,
                                                      top: e.top,
                                                      transform:
                                                          e.id % 2 === 0
                                                              ? `${e.rotation} translateX(-40px)`
                                                              : `${e.rotation} translateX(40px) scaleX(-1)`,
                                                      backgroundImage:
                                                          "url('/tripleboost/assets/images/paw.svg')",
                                                      backgroundSize: "cover",
                                                      backgroundRepeat:
                                                          "no-repeat",
                                                  },
                                              },
                                              e.id
                                          )
                                        : null
                                ),
                            }),
                        ],
                    });
                },
                Q = () => {
                    let [e, t, i] = c((e) => [
                            e.showOverlayVisability,
                            e.scrollPosition,
                            e.userScrolled,
                        ]),
                        s = (0, M.useCallback)((e) => {
                            e.preventDefault();
                            let t = e.currentTarget.getAttribute("href");
                            if (
                                (history.replaceState(
                                    null,
                                    "",
                                    document.location.pathname + t
                                ),
                                t)
                            ) {
                                var i;
                                null === (i = document.querySelector(t)) ||
                                    void 0 === i ||
                                    i.scrollIntoView({ behavior: "smooth" });
                            }
                        }, []),
                        { height: l } = d(),
                        r = l - 638,
                        o = (0, M.useRef)(null),
                        { scrollYProgress: x } = (0, Y.v)({
                            target: o,
                            offset: ["end end", "start start"],
                        });
                    return (0, a.jsxs)(y, {
                        className:
                            "".concat(
                                t < 325 && i ? "invisible" : "visible",
                                " "
                            ) +
                            "bg-midnight-blue py-0 md:py-0 w-full h-[638px] lg:h-[100vh] overflow-hidden relative",
                        id: "footer",
                        children: [
                            (0, a.jsx)(J, {}),
                            (0, a.jsx)("div", {
                                ref: o,
                                style: { height: 638 },
                            }),
                            (0, a.jsxs)("div", {
                                className:
                                    "fixed flex flex-col justify-end w-full h-full bottom-0 md:pb-16 pb-[54px] lg:pointer-events-none",
                                children: [
                                    (0, a.jsxs)(n.E.div, {
                                        /* style: {
                                            scale: (0, D.H)(
                                                x,
                                                [0, 1],
                                                [1, 1 + 6e-4 * r]
                                            ),
                                            y: (0, D.H)(x, [0, 1], [0, -r / 2]),
                                        }, */
                                        className:
                                            "flex flex-col items-center mb-[12vh] mx-auto w-10/12 sm:w-9/12 relative z-10 transition duration-[0.05s]",
                                        children: [
                                            (0, a.jsx)("h2", {
                                                className:
                                                    "z-10 md:text-[46px] lg:text-[62px] xl:text-[74px]",
                                                children: "Ready to grow?",
                                            }),
                                            (0, a.jsx)("p", {
                                                className:
                                                    "header-paragraph opacity-80 text-white max-w-[830px] z-10",
                                                children:
                                                    "Let us run your website, boost your Google & ChatGPT rank, and send emails that sell. Hit the button and watch the results roll in.",
                                            }),
                                            (0, a.jsx)(m, {
                                                label: "Get Started",
                                                style: "shadow_purple",
                                                cssClass: "pointer-events-auto",
                                                onPress: () => {
                                                    window.location.href =
                                                        "https://app.toptal.ai/sign-up-as-client#monster";
                                                },
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)("div", {
                                        className:
                                            "grid md:grid-cols-3 grid-cols-1 justify-between px-16 text-white relative z-10",
                                        children: [
                                            (0, a.jsx)("div", {
                                                className:
                                                    "relative w-[170px] hidden md:block pointer-events-auto",
                                                children: (0, a.jsx)("a", {
                                                    onClick: s,
                                                    href: "#home",
                                                    children: (0, a.jsx)(q, {}),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: "m-auto",
                                                children: (0, a.jsxs)("menu", {
                                                    className:
                                                        "flex flex-row gap-12",
                                                    children: [
                                                        /* (0, a.jsx)("li", {
                                                            children: (0,
                                                            a.jsx)(V(), {
                                                                href: "./terms-conditions",
                                                                onClick: (t) =>
                                                                    e(
                                                                        t,
                                                                        (0,
                                                                        a.jsx)(
                                                                            f,
                                                                            {}
                                                                        )
                                                                    ),
                                                                className:
                                                                    "hover:underline opacity-70 hover:opacity-100 hover:underline-offset-4 underline-offset-1 transition-all select-none pointer-events-auto",
                                                                children:
                                                                    "Terms",
                                                            }),
                                                        }),
                                                        (0, a.jsx)("li", {
                                                            children: (0,
                                                            a.jsx)(V(), {
                                                                href: "./privacy-policy",
                                                                onClick: (t) =>
                                                                    e(
                                                                        t,
                                                                        (0,
                                                                        a.jsx)(
                                                                            C,
                                                                            {}
                                                                        )
                                                                    ),
                                                                className:
                                                                    "hover:underline opacity-70 hover:opacity-100 hover:underline-offset-4 underline-offset-1 transition-all select-none pointer-events-auto",
                                                                children:
                                                                    "Privacy",
                                                            }),
                                                        }), */
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                };
            var K = i(4289),
                $ = i.n(K);
            let ee = () =>
                    (0, a.jsxs)(n.E.svg, {
                        className: "m-auto",
                        whileHover: "visible",
                        width: "100%",
                        height: "100%",
                        viewBox: "-15 0 530 195",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, a.jsx)("path", {
                                d: "M166.921 64.0444H202.301C202.893 64.0444 203.288 64.5014 203.222 64.9583L202.236 74.8806C202.17 75.4028 201.644 75.7944 201.183 75.7944H191.385V108.172C191.385 108.629 190.99 109.086 190.464 109.086H178.824C178.298 109.086 177.837 108.629 177.837 108.172V75.7944H166.921C166.46 75.7944 166 75.4028 166 74.8806V65.0236C166 64.5014 166.46 64.0444 166.921 64.0444Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M226.314 110C212.306 110 202.968 100.6 202.968 86.5653C202.968 72.4 212.306 63 226.314 63C240.321 63 249.66 72.4 249.66 86.5653C249.66 100.6 240.321 110 226.314 110ZM226.314 76.1861C220.921 76.1861 217.304 80.3639 217.304 86.5653C217.304 92.7667 220.921 96.9444 226.314 96.9444C231.706 96.9444 235.323 92.7667 235.323 86.5653C235.323 80.3639 231.706 76.1861 226.314 76.1861Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M254.704 64.0444H270.224C281.732 64.0444 288.638 70.2458 288.638 79.5806C288.638 88.9153 281.732 95.1167 270.224 95.1167H267.527V108.172C267.527 108.629 267.067 109.086 266.475 109.086H254.704C254.243 109.086 253.783 108.629 253.783 108.172V65.0236C253.783 64.5014 254.243 64.0444 254.704 64.0444ZM267.396 83.4319H270.816C273.117 83.4319 274.696 81.8653 274.696 79.5806C274.696 77.2958 273.117 75.7292 270.816 75.7292H267.396V83.4319Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M289.97 64.0444H325.351C325.943 64.0444 326.337 64.5014 326.272 64.9583L325.285 74.8806C325.219 75.4028 324.693 75.7944 324.233 75.7944H314.434V108.172C314.434 108.629 314.04 109.086 313.514 109.086H301.873C301.347 109.086 300.887 108.629 300.887 108.172V75.7944H289.97C289.51 75.7944 289.05 75.4028 289.05 74.8806V65.0236C289.05 64.5014 289.51 64.0444 289.97 64.0444Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M350.13 64.8931L364.993 108.238C365.19 108.629 364.927 109.086 364.401 109.086H351.38C350.788 109.086 350.262 108.76 349.999 108.238L348.026 101.383H335.662L333.69 108.238C333.427 108.76 332.9 109.086 332.309 109.086H319.287C318.761 109.086 318.498 108.629 318.696 108.238L333.558 64.8931C333.755 64.5014 334.479 64.0444 335.136 64.0444H348.552C349.21 64.0444 349.933 64.5014 350.13 64.8931ZM345.395 92.0486L341.844 79.6458L338.293 92.0486H345.395Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M379.913 97.3361H392.145C392.605 97.3361 393 97.7278 393 98.25L392.079 108.172C392.014 108.629 391.553 109.086 391.027 109.086H367.286C366.76 109.086 366.3 108.629 366.3 108.172V65.0236C366.3 64.5014 366.76 64.0444 367.286 64.0444H378.927C379.453 64.0444 379.913 64.5014 379.913 65.0236V97.3361Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M215.99 121.25C216.51 121.25 216.89 121.7 216.89 122.22V164.84C216.89 165.29 216.5 165.74 215.99 165.74H204.06C203.54 165.74 203.09 165.29 203.09 164.84V145.88L196.58 164.77C196.39 165.29 195.55 165.74 194.97 165.74H187.88C187.3 165.74 186.46 165.29 186.27 164.77L179.76 145.88V164.84C179.76 165.29 179.31 165.74 178.79 165.74H166.86C166.34 165.74 165.96 165.29 165.96 164.84V122.22C165.96 121.7 166.35 121.25 166.86 121.25H180.34C181.18 121.25 182.15 121.83 182.53 122.54L191.43 147.17L200.33 122.54C200.72 121.83 201.68 121.25 202.52 121.25H215.99Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M247 166.64C233.27 166.64 224.11 157.36 224.11 143.49C224.11 129.5 233.27 120.22 247 120.22C260.73 120.22 269.89 129.5 269.89 143.49C269.89 157.36 260.73 166.64 247 166.64ZM247 133.24C241.71 133.24 238.17 137.37 238.17 143.49C238.17 149.62 241.72 153.74 247 153.74C252.29 153.74 255.83 149.61 255.83 143.49C255.83 137.37 252.29 133.24 247 133.24Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M314.18 121.25C314.76 121.25 315.15 121.7 315.15 122.22V164.84C315.15 165.29 314.76 165.74 314.18 165.74H303.03C302.58 165.74 302 165.42 301.68 164.9L290.46 144.85V164.84C290.46 165.29 290.07 165.74 289.49 165.74H278.08C277.56 165.74 277.18 165.29 277.18 164.84V122.22C277.18 121.7 277.57 121.25 278.08 121.25H289.23C289.81 121.25 290.45 121.57 290.71 122.09L301.86 142.14V122.22C301.86 121.7 302.31 121.25 302.76 121.25H314.18Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M326.56 152.2C326.75 151.56 327.2 151.36 327.72 151.69C330.69 153.37 334.23 154.59 336.68 154.78C338.74 154.78 340.1 153.81 340.1 152.33C340.1 148.53 321.98 148.72 321.98 134.67C321.98 126.03 328.49 120.29 338.29 120.29C342.87 120.29 348.67 122.16 352.73 124.93C353.25 125.25 353.44 125.77 353.25 126.09L349.19 135.18C349 135.82 348.55 136.02 348.03 135.69C344.87 133.89 341.2 132.53 338.94 132.34C336.94 132.34 335.65 133.24 335.65 134.66C335.65 138.46 353.9 138.21 353.9 152.39C353.9 160.96 347.26 166.7 337.33 166.7C331.91 166.7 326.24 165.02 323.02 162.45C322.5 162.06 322.31 161.61 322.5 161.29L326.56 152.2Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M394 121.25C394.58 121.25 394.97 121.7 394.9 122.15L393.93 131.95C393.87 132.47 393.35 132.85 392.9 132.85H383.29V164.83C383.29 165.28 382.9 165.73 382.39 165.73H370.98C370.46 165.73 370.01 165.28 370.01 164.83V132.85H359.31C358.86 132.85 358.41 132.46 358.41 131.95V122.21C358.41 121.69 358.86 121.24 359.31 121.24H394V121.25Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M431.32 154.13C431.84 154.13 432.29 154.52 432.29 154.97V164.83C432.29 165.28 431.84 165.73 431.32 165.73H401.34C400.89 165.73 400.44 165.21 400.31 164.76V122.14C400.31 121.56 400.63 121.24 401.21 121.24H430.54C431.12 121.24 431.57 121.69 431.57 122.14V131.87C431.57 132.45 431.12 132.84 430.54 132.84H413.71V137.93H427.38C427.96 137.93 428.28 138.38 428.22 138.77L427.32 147.8C427.26 148.19 426.8 148.64 426.22 148.64H413.71V154.12H431.32V154.13Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M475.94 164.7C476.26 165.28 475.81 165.73 475.23 165.73H461.43C460.79 165.73 460.2 165.28 459.95 164.7L453.25 150.65H452.48V164.83C452.48 165.28 452.03 165.73 451.45 165.73H440.1C439.58 165.73 439.13 165.28 439.13 164.83V122.21C439.13 121.69 439.58 121.24 440.1 121.24H457.12C467.05 121.24 473.62 127.04 473.62 135.81C473.62 140.9 470.53 146.06 465.69 148.12L475.94 164.7ZM456.27 139.69C458.46 139.69 459.94 138.34 459.94 136.27C459.94 134.2 458.46 132.85 456.27 132.85H452.47V139.68H456.27V139.69Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M70.48 105.64C85.574 105.64 97.81 93.4039 97.81 78.31C97.81 63.216 85.574 50.98 70.48 50.98C55.3861 50.98 43.15 63.216 43.15 78.31C43.15 93.4039 55.3861 105.64 70.48 105.64Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M85.37 78.3099C85.37 86.5299 78.7 93.1899 70.48 93.1899C62.26 93.1899 55.6 86.5299 55.6 78.3099C55.6 70.0899 62.26 63.4199 70.48 63.4199C71.56 63.4199 72.62 63.5399 73.63 63.7499C72.57 65.1299 71.94 66.8499 71.94 68.7199C71.94 73.2099 75.58 76.8499 80.08 76.8499C81.95 76.8499 83.67 76.2199 85.04 75.1699C85.26 76.1799 85.37 77.2299 85.37 78.3099Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M88.07 124.35L99.43 134.51C100 135.02 99.81 135.96 99.08 136.21L76.43 143.66C75.7 143.9 74.98 143.26 75.14 142.51L78.25 127.59C79.19 123.08 84.64 121.29 88.07 124.35Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M70.49 144.22C58.65 144.22 47.22 141.69 36.53 136.7C35.01 135.99 34.35 134.18 35.06 132.65C35.77 131.12 37.58 130.46 39.11 131.18C48.99 135.79 59.55 138.13 70.5 138.13C81.45 138.13 92.01 135.79 101.89 131.18C103.42 130.47 105.23 131.13 105.94 132.65C106.65 134.17 105.99 135.99 104.47 136.7C93.75 141.69 82.33 144.22 70.49 144.22Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M104.362 160.588H36.3561C23.5526 160.588 13.1822 150.217 13.1822 137.414V65.5288C13.1822 58.6185 16.2634 52.0672 21.5882 47.6697L55.5913 19.5599C64.1569 12.48 76.5516 12.48 85.1172 19.5599L119.12 47.6697C124.445 52.0672 127.526 58.6185 127.526 65.5288V137.414C127.536 150.207 117.166 160.588 104.362 160.588Z",
                                fill: "#764AF1",
                            }),
                            (0, a.jsxs)(n.E.g, {
                                variants: {
                                    visible: {
                                        rotate: 360,
                                        transition: {
                                            rotate: {
                                                repeat: 1 / 0,
                                                duration: 1.7,
                                                ease: "backOut",
                                            },
                                        },
                                    },
                                },
                                transition: { ease: "linear" },
                                style: { transformOrigin: "center" },
                                children: [
                                    (0, a.jsx)("path", {
                                        d: "M70.3593 105.694C85.4103 105.694 97.6116 93.4931 97.6116 78.442C97.6116 63.391 85.4103 51.1897 70.3593 51.1897C55.3082 51.1897 43.1069 63.391 43.1069 78.442C43.1069 93.4931 55.3082 105.694 70.3593 105.694Z",
                                        fill: "white",
                                    }),
                                    (0, a.jsx)(n.E.path, {
                                        d: "M85.2069 78.4419C85.2069 86.6386 78.5558 93.2796 70.3592 93.2796C62.1626 93.2796 55.5215 86.6386 55.5215 78.4419C55.5215 70.2453 62.1626 63.5942 70.3592 63.5942C71.4361 63.5942 72.4931 63.7139 73.5003 63.9233C72.4433 65.2994 71.8151 67.0145 71.8151 68.8792C71.8151 73.3564 75.4447 76.9861 79.9319 76.9861C81.7966 76.9861 83.5117 76.3579 84.8778 75.3108C85.0972 76.318 85.2069 77.365 85.2069 78.4419Z",
                                        fill: "black",
                                        variants: {
                                            visible: {
                                                rotate: -360,
                                                x: 10,
                                                transition: {
                                                    rotate: {
                                                        repeat: 1 / 0,
                                                        duration: 1.7,
                                                        ease: "backOut",
                                                    },
                                                },
                                            },
                                        },
                                        transition: { ease: "linear" },
                                    }),
                                ],
                            }),
                            (0, a.jsx)("path", {
                                d: "M87.8992 124.341L99.2269 134.472C99.7953 134.981 99.6059 135.918 98.8779 136.167L76.2923 143.596C75.5644 143.836 74.8464 143.197 75.006 142.45L78.1071 127.572C79.0445 123.085 84.479 121.29 87.8992 124.341Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M70.3592 144.165C58.5529 144.165 47.1554 141.642 36.4957 136.666C34.9801 135.958 34.3219 134.153 35.0299 132.628C35.7379 131.102 37.5428 130.444 39.0684 131.162C48.9203 135.759 59.4503 138.092 70.3692 138.092C81.2881 138.092 91.818 135.759 101.67 131.162C103.196 130.454 105 131.112 105.708 132.628C106.416 134.143 105.758 135.958 104.243 136.666C93.5631 141.642 82.1755 144.165 70.3592 144.165Z",
                                fill: "black",
                            }),
                        ],
                    }),
                et = () =>
                    (0, a.jsxs)(n.E.svg, {
                        whileHover: "visible",
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 500 196",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, a.jsx)("path", {
                                d: "M166.884 62H200.862C201.431 62 201.809 62.4375 201.746 62.875L200.799 72.375C200.736 72.875 200.231 73.25 199.789 73.25H190.378V104.25C190.378 104.687 189.999 105.125 189.494 105.125H178.315C177.81 105.125 177.368 104.687 177.368 104.25V73.25H166.884C166.442 73.25 166 72.875 166 72.375V62.9375C166 62.4375 166.442 62 166.884 62Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M223.923 106C210.47 106 201.502 97 201.502 83.5625C201.502 70 210.47 61 223.923 61C237.375 61 246.343 70 246.343 83.5625C246.343 97 237.375 106 223.923 106ZM223.923 73.625C218.744 73.625 215.27 77.625 215.27 83.5625C215.27 89.5 218.744 93.5 223.923 93.5C229.101 93.5 232.575 89.5 232.575 83.5625C232.575 77.625 229.101 73.625 223.923 73.625Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M251.187 62H266.092C277.144 62 283.775 67.9375 283.775 76.875C283.775 85.8125 277.144 91.75 266.092 91.75H263.502V104.25C263.502 104.687 263.06 105.125 262.492 105.125H251.187C250.745 105.125 250.303 104.687 250.303 104.25V62.9375C250.303 62.4375 250.745 62 251.187 62ZM263.376 80.5625H266.66C268.87 80.5625 270.386 79.0625 270.386 76.875C270.386 74.6875 268.87 73.1875 266.66 73.1875H263.376V80.5625Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M285.055 62H319.033C319.602 62 319.98 62.4375 319.917 62.875L318.97 72.375C318.907 72.875 318.402 73.25 317.959 73.25H308.549V104.25C308.549 104.687 308.17 105.125 307.665 105.125H296.486C295.981 105.125 295.539 104.687 295.539 104.25V73.25H285.055C284.613 73.25 284.171 72.875 284.171 72.375V62.9375C284.171 62.4375 284.613 62 285.055 62Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M342.83 62.8125L357.103 104.312C357.293 104.687 357.04 105.125 356.535 105.125H344.03C343.462 105.125 342.956 104.812 342.704 104.312L340.809 97.75H328.936L327.041 104.312C326.788 104.812 326.283 105.125 325.715 105.125H313.21C312.705 105.125 312.452 104.687 312.642 104.312L326.915 62.8125C327.104 62.4375 327.799 62 328.431 62H341.314C341.946 62 342.641 62.4375 342.83 62.8125ZM338.283 88.8125L334.872 76.9375L331.462 88.8125H338.283Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M371.432 93.875H383.179C383.621 93.875 384 94.25 384 94.75L383.116 104.25C383.053 104.687 382.611 105.125 382.105 105.125H359.306C358.801 105.125 358.359 104.687 358.359 104.25V62.9375C358.359 62.4375 358.801 62 359.306 62H370.485C370.99 62 371.432 62.4375 371.432 62.9375V93.875Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M215.99 121.25C216.51 121.25 216.89 121.7 216.89 122.22V164.84C216.89 165.29 216.5 165.74 215.99 165.74H204.06C203.54 165.74 203.09 165.29 203.09 164.84V145.88L196.58 164.77C196.39 165.29 195.55 165.74 194.97 165.74H187.88C187.3 165.74 186.46 165.29 186.27 164.77L179.76 145.88V164.84C179.76 165.29 179.31 165.74 178.79 165.74H166.86C166.34 165.74 165.96 165.29 165.96 164.84V122.22C165.96 121.7 166.35 121.25 166.86 121.25H180.34C181.18 121.25 182.15 121.83 182.53 122.54L191.43 147.17L200.33 122.54C200.72 121.83 201.68 121.25 202.52 121.25H215.99Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M247 166.64C233.27 166.64 224.11 157.36 224.11 143.49C224.11 129.5 233.27 120.22 247 120.22C260.73 120.22 269.89 129.5 269.89 143.49C269.89 157.36 260.73 166.64 247 166.64ZM247 133.24C241.71 133.24 238.17 137.37 238.17 143.49C238.17 149.62 241.72 153.74 247 153.74C252.29 153.74 255.83 149.61 255.83 143.49C255.83 137.37 252.29 133.24 247 133.24Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M314.18 121.25C314.76 121.25 315.15 121.7 315.15 122.22V164.84C315.15 165.29 314.76 165.74 314.18 165.74H303.03C302.58 165.74 302 165.42 301.68 164.9L290.46 144.85V164.84C290.46 165.29 290.07 165.74 289.49 165.74H278.08C277.56 165.74 277.18 165.29 277.18 164.84V122.22C277.18 121.7 277.57 121.25 278.08 121.25H289.23C289.81 121.25 290.45 121.57 290.71 122.09L301.86 142.14V122.22C301.86 121.7 302.31 121.25 302.76 121.25H314.18Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M326.56 152.2C326.75 151.56 327.2 151.36 327.72 151.69C330.69 153.37 334.23 154.59 336.68 154.78C338.74 154.78 340.1 153.81 340.1 152.33C340.1 148.53 321.98 148.72 321.98 134.67C321.98 126.03 328.49 120.29 338.29 120.29C342.87 120.29 348.67 122.16 352.73 124.93C353.25 125.25 353.44 125.77 353.25 126.09L349.19 135.18C349 135.82 348.55 136.02 348.03 135.69C344.87 133.89 341.2 132.53 338.94 132.34C336.94 132.34 335.65 133.24 335.65 134.66C335.65 138.46 353.9 138.21 353.9 152.39C353.9 160.96 347.26 166.7 337.33 166.7C331.91 166.7 326.24 165.02 323.02 162.45C322.5 162.06 322.31 161.61 322.5 161.29L326.56 152.2Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M394 121.25C394.58 121.25 394.97 121.7 394.9 122.15L393.93 131.95C393.87 132.47 393.35 132.85 392.9 132.85H383.29V164.83C383.29 165.28 382.9 165.73 382.39 165.73H370.98C370.46 165.73 370.01 165.28 370.01 164.83V132.85H359.31C358.86 132.85 358.41 132.46 358.41 131.95V122.21C358.41 121.69 358.86 121.24 359.31 121.24H394V121.25Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M431.32 154.13C431.84 154.13 432.29 154.52 432.29 154.97V164.83C432.29 165.28 431.84 165.73 431.32 165.73H401.34C400.89 165.73 400.44 165.21 400.31 164.76V122.14C400.31 121.56 400.63 121.24 401.21 121.24H430.54C431.12 121.24 431.57 121.69 431.57 122.14V131.87C431.57 132.45 431.12 132.84 430.54 132.84H413.71V137.93H427.38C427.96 137.93 428.28 138.38 428.22 138.77L427.32 147.8C427.26 148.19 426.8 148.64 426.22 148.64H413.71V154.12H431.32V154.13Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M475.94 164.7C476.26 165.28 475.81 165.73 475.23 165.73H461.43C460.79 165.73 460.2 165.28 459.95 164.7L453.25 150.65H452.48V164.83C452.48 165.28 452.03 165.73 451.45 165.73H440.1C439.58 165.73 439.13 165.28 439.13 164.83V122.21C439.13 121.69 439.58 121.24 440.1 121.24H457.12C467.05 121.24 473.62 127.04 473.62 135.81C473.62 140.9 470.53 146.06 465.69 148.12L475.94 164.7ZM456.27 139.69C458.46 139.69 459.94 138.34 459.94 136.27C459.94 134.2 458.46 132.85 456.27 132.85H452.47V139.68H456.27V139.69Z",
                                fill: "black",
                            }),
                            (0, a.jsx)("path", {
                                d: "M115.39 170.98H47.1899C34.3499 170.98 23.95 160.58 23.95 147.74V75.65C23.95 68.72 27.04 62.15 32.38 57.74L66.48 29.55C75.07 22.45 87.5 22.45 96.09 29.55L130.19 57.74C135.53 62.15 138.62 68.72 138.62 75.65V147.74C138.63 160.57 128.23 170.98 115.39 170.98Z",
                                fill: "#764AF1",
                            }),
                            (0, a.jsxs)(n.E.g, {
                                variants: {
                                    visible: {
                                        rotate: 360,
                                        transition: {
                                            rotate: {
                                                repeat: 1 / 0,
                                                duration: 1.7,
                                                ease: "backOut",
                                            },
                                        },
                                    },
                                },
                                transition: { ease: "linear" },
                                style: { transformOrigin: "center" },
                                children: [
                                    (0, a.jsx)("path", {
                                        d: "M81.29 115.93C96.3839 115.93 108.62 103.694 108.62 88.6C108.62 73.5061 96.3839 61.27 81.29 61.27C66.196 61.27 53.96 73.5061 53.96 88.6C53.96 103.694 66.196 115.93 81.29 115.93Z",
                                        fill: "white",
                                    }),
                                    (0, a.jsx)(n.E.path, {
                                        d: "M96.1799 88.6C96.1799 96.82 89.5099 103.48 81.2899 103.48C73.0699 103.48 66.4099 96.82 66.4099 88.6C66.4099 80.38 73.0699 73.71 81.2899 73.71C82.3699 73.71 83.4299 73.83 84.4399 74.04C83.3799 75.42 82.7499 77.14 82.7499 79.01C82.7499 83.5 86.3899 87.14 90.8899 87.14C92.7599 87.14 94.4799 86.51 95.8499 85.46C96.0699 86.47 96.1799 87.52 96.1799 88.6Z",
                                        fill: "black",
                                        variants: {
                                            visible: {
                                                rotate: -360,
                                                x: 10,
                                                transition: {
                                                    rotate: {
                                                        repeat: 1 / 0,
                                                        duration: 1.7,
                                                        ease: "backOut",
                                                    },
                                                },
                                            },
                                        },
                                        transition: { ease: "linear" },
                                    }),
                                ],
                            }),
                            (0, a.jsx)("path", {
                                d: "M98.8799 134.63L110.24 144.79C110.81 145.3 110.62 146.24 109.89 146.49L87.2399 153.94C86.5099 154.18 85.7899 153.54 85.9499 152.79L89.0599 137.87C89.9999 133.37 95.4499 131.57 98.8799 134.63Z",
                                fill: "white",
                            }),
                            (0, a.jsx)("path", {
                                d: "M81.2899 154.51C69.4499 154.51 58.0199 151.98 47.3299 146.99C45.8099 146.28 45.1499 144.47 45.8599 142.94C46.5699 141.41 48.3799 140.75 49.9099 141.47C59.7899 146.08 70.3499 148.42 81.2999 148.42C92.2499 148.42 102.81 146.08 112.69 141.47C114.22 140.76 116.03 141.42 116.74 142.94C117.45 144.46 116.79 146.28 115.27 146.99C104.56 151.98 93.1399 154.51 81.2899 154.51Z",
                                fill: "black",
                            }),
                        ],
                    }),
                ei = () => {
                    let [e, t, i] = c((e) => [
                            e.scrollPosition,
                            e.showOverlayVisability,
                            e.loaderStatus,
                        ]),
                        s = e > 325,
                        l = (0, M.useCallback)((e) => {
                            e.preventDefault();
                            let t = e.currentTarget.getAttribute("href");
                            if (
                                (history.replaceState(
                                    null,
                                    "",
                                    document.location.pathname + t
                                ),
                                t)
                            ) {
                                var i;
                                null === (i = document.querySelector(t)) ||
                                    void 0 === i ||
                                    i.scrollIntoView({ behavior: "smooth" });
                            }
                        }, []);
                    return (0, a.jsx)("div", {
                        className: "hidden md:block",
                        children: (0, a.jsxs)(n.E.div, {
                            initial: { opacity: 0 },
                            animate: {
                                opacity: i < 2 && 0 == e ? 0 : 1,
                                transitionEnd: {
                                    maxWidth: s ? "fit-content" : "1500px",
                                    backgroundColor: s
                                        ? "rgba(255, 255, 255, 0.97)"
                                        : "#764AF1",
                                    boxShadow: s
                                        ? "0px 84px 34px rgba(0, 0, 0, 0.01), 0px 47px 28px rgba(0, 0, 0, 0.04), 0px 21px 21px rgba(0, 0, 0, 0.06), 0px 5px 12px rgba(0, 0, 0, 0.07), 0px 0px 0px rgba(0, 0, 0, 0.07)"
                                        : "none",
                                    borderRadius: s ? "100px" : "0px",
                                    position: s ? "fixed" : "absolute",
                                    top: s ? "32px" : "0px",
                                    paddingTop: s ? "0px" : "15px",
                                    paddingBottom: s ? "0px" : "15px",
                                    paddingRight: s ? "10px" : "24px",
                                },
                            },
                            transition: {
                                duration: 0,
                                opacity: {
                                    duration: 0 == e ? 0.8 : 0,
                                    delay: 0 == e ? 1.85 : 0,
                                    type: "spring",
                                },
                            },
                            className: ""
                                .concat($().menu_container, " ")
                                .concat(
                                    s ? $().collapsed : null,
                                    " absolute w-full text-white rounded-full flex flex-row justify-between align-middle mx-auto backdrop-blur-sm left-0 right-0 m-auto z-50"
                                ),
                            children: [
                                (0, a.jsx)("div", {
                                    className: "relative w-[138px]",
                                    children: (0, a.jsxs)("a", {
                                        href: "#home",
                                        onClick: l,
                                        children: [
                                            (0, a.jsx)(n.E.div, {
                                                animate: {
                                                    transitionEnd: {
                                                        opacity: s ? 1 : 0,
                                                    },
                                                },
                                                className: "".concat(
                                                    s
                                                        ? "opacity-1"
                                                        : "animate-[fadeOut_0.15s_ease]",
                                                    "\n                    absolute w-[138px] h-[47px] ml-[9px] mt-[7px] transition-none"
                                                ),
                                                transition: { duration: 0 },
                                                children: (0, a.jsx)(et, {}),
                                            }),
                                            (0, a.jsx)(n.E.div, {
                                                animate: {
                                                    transitionEnd: {
                                                        opacity: s ? 0 : 1,
                                                        pointerEvents: s
                                                            ? "none"
                                                            : "auto",
                                                    },
                                                },
                                                transition: { duration: 0 },
                                                className: "".concat(
                                                    s
                                                        ? "opacity-0"
                                                        : "animate-[fadeIn_0.15s_ease]",
                                                    "\n                  absolute w-[190px] h-[70px] ml-[11px] mt-[0px] transition-none"
                                                ),
                                                children: (0, a.jsx)(ee, {}),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, a.jsx)(n.E.span, {
                                    animate: {
                                        transitionEnd: {
                                            color: s
                                                ? "rgba(1, 22, 56, 1)"
                                                : "rgba(255, 255, 255, 1)",
                                        },
                                    },
                                    transition: { duration: 0 },
                                    className: "".concat(
                                        s
                                            ? "text-[rgba(1, 22, 56, 1)]"
                                            : "animate-[textColor_0.15s_ease]",
                                        " py-5 relative"
                                    ),
                                    children: (0, a.jsxs)("menu", {
                                        id: $().desktop_nav,
                                        className:
                                            "flex flex-row gap-7 lg:gap-10 select-none px-8 lg:px-12",
                                        children: [
                                            (0, a.jsxs)("a", {
                                                href: "#about",
                                                onClick: l,
                                                className: $().menu_link,
                                                children: [
                                                    (0, a.jsx)("span", {
                                                        className:
                                                            $().menu_link_text,
                                                        children: "About",
                                                    }),
                                                    (0, a.jsx)(n.E.span, {
                                                        className:
                                                            $()
                                                                .menu_link_underline,
                                                        animate: {
                                                            backgroundColor: s
                                                                ? "#000"
                                                                : "#FFF",
                                                        },
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("a", {
                                                href: "#features",
                                                onClick: l,
                                                className: $().menu_link,
                                                children: [
                                                    (0, a.jsx)("span", {
                                                        className:
                                                            $().menu_link_text,
                                                        children: "Features",
                                                    }),
                                                    (0, a.jsx)(n.E.span, {
                                                        className:
                                                            $()
                                                                .menu_link_underline,
                                                        animate: {
                                                            backgroundColor: s
                                                                ? "#000"
                                                                : "#FFF",
                                                        },
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsxs)("a", {
                                                href: "#pricing",
                                                onClick: l,
                                                className: $().menu_link,
                                                children: [
                                                    (0, a.jsx)("span", {
                                                        className:
                                                            $().menu_link_text,
                                                        children: "Pricing",
                                                    }),
                                                    (0, a.jsx)(n.E.span, {
                                                        className:
                                                            $()
                                                                .menu_link_underline,
                                                        animate: {
                                                            backgroundColor: s
                                                                ? "#000"
                                                                : "#FFF",
                                                        },
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                (0, a.jsx)("div", {
                                    className: "py-5 ",
                                    children: (0, a.jsx)(n.E.a, {
                                        style: {
                                            borderRadius: "9999px",
                                        },
                                        animate: {
                                            transitionEnd: {
                                                backgroundColor: s
                                                    ? "rgb(239, 71, 111)"
                                                    : "rgba(255, 255, 255, 0.25)",
                                                paddingLeft: s
                                                    ? "18px"
                                                    : "24px",
                                                marginLeft: s ? "0px" : "4px",
                                            },
                                        },
                                        transition: { duration: 0 },
                                        className: ""
                                            .concat($().primary_button, " ")
                                            .concat(s ? $().collapsed : ""),
                                        href: "https://app.toptal.ai/sign-up-as-client#monster",
                                        children: (0, a.jsx)("span", {
                                            children: "Get Started",
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    });
                };
            var ea = i(2304),
                es = i(1126),
                en = i.n(es);
            let el = (e) => {
                let { motionValue: t, menuOpen: i, onClick: s } = e,
                    l = () => {
                        s(i);
                    },
                    [r] = c((e) => [e.scrollPosition]),
                    o = r > 325;
                return (0, a.jsx)(n.E.span, {
                    onClick: l,
                    style: {
                        backgroundColor: (0, D.H)(
                            t,
                            [0, 1],
                            [
                                o && !i ? "#EF476F" : "#fff",
                                o && !i ? "#011638" : "#fff",
                            ]
                        ),
                    },
                    className:
                        ""
                            .concat(en().menu_button, " \n        ")
                            .concat(i ? en().menu_button_open : null, " ") +
                        "rounded-full h-[48px] w-[48px] bg-midnight-blue flex flex-col justify-center items-center",
                    children: (0, a.jsxs)("svg", {
                        width: "22",
                        height: "19",
                        viewBox: "0 0 22 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            (0, a.jsx)(n.E.rect, {
                                x: "0.184082",
                                y: "3.47314",
                                width: "22",
                                height: "2",
                                transform: "rotate(-10 0.184082 3.47314)",
                                style: {
                                    transform: (0, D.H)(
                                        t,
                                        [0, 1],
                                        [
                                            "rotate(-10deg) translateX(0.184082%) translateY(-17.52686%)",
                                            "rotate(-45deg) translateX(-5.81592%) translateY(-20.52686%)",
                                        ]
                                    ),
                                    originX: 1,
                                    originY: 0,
                                },
                                fill: (0, D.H)(
                                    t,
                                    [0, 1],
                                    [
                                        o && !i ? "#fff" : "#011638",
                                        o && !i ? "#fff" : "#011638",
                                    ]
                                ),
                            }),
                            (0, a.jsx)(n.E.rect, {
                                x: "0.184082",
                                y: "10.0156",
                                width: "22",
                                height: "2",
                                transform: "rotate(-10 0.184082 10.0156)",
                                style: {
                                    transform: (0, D.H)(
                                        t,
                                        [0, 1],
                                        [
                                            "rotate(-10deg) translateX(0.18408%) translateY(-8.9844%)",
                                            "rotate(-10deg) translateX(107.18408%) translateY(-8.9844%)",
                                        ]
                                    ),
                                },
                                fill: (0, D.H)(
                                    t,
                                    [0, 1],
                                    [
                                        o && !i ? "#fff" : "#011638",
                                        o && !i ? "#fff" : "#011638",
                                    ]
                                ),
                            }),
                            (0, a.jsx)(n.E.rect, {
                                x: "0.184082",
                                y: "16.5581",
                                width: "22",
                                height: "2",
                                transform: "rotate(-10 0.184082 16.5581)",
                                style: {
                                    transform: (0, D.H)(
                                        t,
                                        [0, 1],
                                        [
                                            "rotate(-10deg) translateX(0.184082%) translateY(-18.5581%)",
                                            "rotate(45deg) translateX(-4.81592%) translateY(11.47314%)",
                                        ]
                                    ),
                                    originX: 1,
                                    originY: 0,
                                },
                                fill: (0, D.H)(
                                    t,
                                    [0, 1],
                                    [
                                        o && !i ? "#fff" : "#011638",
                                        o && !i ? "#fff" : "#011638",
                                    ]
                                ),
                            }),
                        ],
                    }),
                });
            };
            function er() {
                (document.body.style.overflow = "hidden"),
                    document.body.setAttribute("data-lenis-prevent", "true");
            }
            function eo() {
                (document.body.style.overflow = "auto"),
                    document.body.hasAttribute("data-lenis-prevent") &&
                        document.body.removeAttribute("data-lenis-prevent");
            }
            var ec = i(662),
                ed = i.n(ec);
            let ex = () => {
                let [e, t, i] = c((e) => [
                        e.scrollPosition,
                        e.loaderStatus,
                        e.showOverlayVisability,
                    ]),
                    s = e > 325,
                    [l, r] = (0, M.useState)(!1),
                    o = (0, b.c)(0),
                    d = (e) => {
                        e.preventDefault(), r(!1), eo(), (0, ea.j)(o, 0);
                        let t = e.currentTarget.getAttribute("href");
                        history.replaceState(
                            null,
                            "",
                            document.location.pathname + t
                        ),
                            setTimeout(
                                () => {
                                    document
                                        .querySelector(t)
                                        .scrollIntoView({ behavior: "smooth" });
                                },
                                l ? 400 : 0
                            );
                    },
                    x = () => {
                        l ? (eo(), (0, ea.j)(o, 0)) : (er(), (0, ea.j)(o, 1)),
                            r(!l);
                    },
                    p = {
                        hide: { opacity: 0, y: "100%" },
                        show: (e) => ({
                            opacity: l ? 1 : 0,
                            y: l ? "0%" : "100%",
                            transition: {
                                type: "spring",
                                bounce: 0.5,
                                duration: l ? 0.6 : 0.2,
                                delay: l ? 0.3 + e : 0.3 - e,
                            },
                        }),
                    };
                return (
                    (0, M.useEffect)(() => {
                        let i = document.querySelector(
                            'meta[name="theme-color"]'
                        );
                        l
                            ? setTimeout(() => {
                                  null == i ||
                                      i.setAttribute("content", "#011638");
                              }, 120)
                            : e > 0
                            ? null == i || i.setAttribute("content", "#000000")
                            : t &&
                              (null == i ||
                                  i.setAttribute("content", "#764AF1"));
                    }, [l, t, e]),
                    (0, a.jsxs)("div", {
                        className: "relative md:invisible",
                        children: [
                            (0, a.jsx)(n.E.div, {
                                animate: {
                                    position: s ? "fixed" : "absolute",
                                    right: s ? "24px" : "14px",
                                    top: s ? "24px" : "14px",
                                    opacity: 1,
                                    scale: l ? 48 : 1,
                                    transitionEnd: { opacity: l ? 1 : 0 },
                                },
                                transition: {
                                    ease: "easeIn",
                                    duration: 0.4,
                                    opacity: { duration: 0 },
                                },
                                className:
                                    "h-[48px] w-[48px] rounded-full bg-midnight-blue z-40",
                            }),
                            (0, a.jsxs)(n.E.div, {
                                initial: {
                                    backgroundColor: "rgba(255, 255, 255, 0)",
                                    opacity: 0,
                                },
                                animate: {
                                    opacity: t < 2 && 0 == e ? 0 : 1,
                                    transitionEnd: {
                                        margin: s ? "0px 16px 0px 16px" : "0px",
                                        backgroundColor:
                                            s && !l
                                                ? "rgba(255, 255, 255, 0.97)"
                                                : "rgba(255, 255, 255, 0)",
                                        boxShadow:
                                            s && !l
                                                ? "0px 84px 34px rgba(0, 0, 0, 0.01), 0px 47px 28px rgba(0, 0, 0, 0.04), 0px 21px 21px rgba(0, 0, 0, 0.06), 0px 5px 12px rgba(0, 0, 0, 0.07), 0px 0px 0px rgba(0, 0, 0, 0.07)"
                                                : "none",
                                        borderRadius: "100px",
                                        position: s ? "fixed" : "absolute",
                                        top: s ? "16px" : "0px",
                                    },
                                },
                                transition: {
                                    duration: 0,
                                    opacity: {
                                        duration: 0 == e ? 0.8 : 0,
                                        delay: 0 == e ? 1.85 : 0,
                                        type: "spring",
                                    },
                                },
                                className: ""
                                    .concat(ed().mobile_menu_container, " ")
                                    .concat(
                                        s ? ed().collapsed : null,
                                        " absolute text-white h-[64px] rounded-full flex flex-row justify-between align-middle mx-auto left-0 right-0 m-auto z-[51]"
                                    ),
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: "relative w-[138px]",
                                        children: [
                                            (0, a.jsx)(n.E.div, {
                                                animate: {
                                                    transitionEnd: {
                                                        opacity:
                                                            s && !l ? 1 : 0,
                                                    },
                                                },
                                                transition: { duration: 0 },
                                                className: "".concat(
                                                    s && !l
                                                        ? "opacity-1"
                                                        : "animate-[fadeOut_0.15s_ease]",
                                                    "\n                absolute w-[138px] h-[47px] ml-[9px] mt-[7px]"
                                                ),
                                                children: (0, a.jsx)("a", {
                                                    href: "#home",
                                                    onClick: d,
                                                    children: (0, a.jsx)(g(), {
                                                        src: "/tripleboost/assets/images/Toptal-monster-logo-black.svg",
                                                        fill: !0,
                                                        style: {
                                                            objectFit:
                                                                "contain",
                                                        },
                                                        alt: "itTest Logo",
                                                    }),
                                                }),
                                            }),
                                            (0, a.jsx)(n.E.div, {
                                                animate: {
                                                    opacity: s && l ? 1 : 0,
                                                },
                                                transition: { duration: 0 },
                                                className:
                                                    "absolute w-[138px] h-[47px] ml-[9px] mt-[7px]",
                                                children: (0, a.jsx)("a", {
                                                    href: "#home",
                                                    onClick: d,
                                                    children: (0, a.jsx)(g(), {
                                                        src: "/tripleboost/assets/images/Toptal-monster-logo-white-small.svg",
                                                        fill: !0,
                                                        style: {
                                                            objectFit:
                                                                "contain",
                                                        },
                                                        alt: "itTest Logo",
                                                    }),
                                                }),
                                            }),
                                            (0, a.jsx)(n.E.div, {
                                                animate: {
                                                    transitionEnd: {
                                                        opacity: s ? 0 : 1,
                                                        pointerEvents: s
                                                            ? "none"
                                                            : "auto",
                                                    },
                                                },
                                                transition: { duration: 0 },
                                                className: "".concat(
                                                    s
                                                        ? "opacity-0"
                                                        : "animate-[fadeIn_0.15s_ease]",
                                                    " absolute w-[190px] h-[70px] ml-[0px] mt-[3px]"
                                                ),
                                                children: (0, a.jsx)("a", {
                                                    href: "#home",
                                                    onClick: d,
                                                    children: (0, a.jsx)(g(), {
                                                        src: "/tripleboost/assets/images/Toptal-monster-secondary-logo-alt1.svg",
                                                        fill: !0,
                                                        style: {
                                                            objectFit:
                                                                "contain",
                                                        },
                                                        alt: "Toptal Logo",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(n.E.div, {
                                        animate: {
                                            transitionEnd: {
                                                paddingTop: s ? 8 : 14,
                                                marginRight: s ? 8 : 14,
                                            },
                                        },
                                        transition: { duration: 0 },
                                        className: "".concat(
                                            s
                                                ? "mr-[14px] pt-[14px]"
                                                : "animate-[menuButtonSpacing_0.15s_ease]"
                                        ),
                                        children: (0, a.jsx)(el, {
                                            motionValue: o,
                                            menuOpen: l,
                                            onClick: x,
                                        }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)("div", {
                                className:
                                    "w-screen h-screen fixed left-0 top-0 pointer-events-none flex flex-col justify-center z-50",
                                "data-lenis-prevent": !0,
                                children: (0, a.jsxs)(n.E.nav, {
                                    initial: { opacity: 0 },
                                    transition: { duration: l ? 0.8 : 0.4 },
                                    animate: { opacity: l ? 1 : 0 },
                                    style: {
                                        pointerEvents: l ? "auto" : "none",
                                    },
                                    className:
                                        "flex flex-col items-center gap-[46px] text-white overflow-auto pt-[126px] pb-[90px] text-[18px]",
                                    children: [
                                        (0, a.jsx)("a", {
                                            href: "#about",
                                            onClick: d,
                                            className: "".concat(
                                                ed().mobile_menu_nav_button,
                                                " text-monster-purple overflow-hidden table"
                                            ),
                                            children: (0, a.jsx)(n.E.span, {
                                                className: "inline-block",
                                                variants: p,
                                                initial: "hide",
                                                animate: "show",
                                                custom: 0,
                                                children: "About",
                                            }),
                                        }),
                                        (0, a.jsx)("a", {
                                            href: "#features",
                                            onClick: d,
                                            className: "".concat(
                                                ed().mobile_menu_nav_button,
                                                " text-blood-red overflow-hidden table"
                                            ),
                                            children: (0, a.jsx)(n.E.span, {
                                                className: "inline-block",
                                                variants: p,
                                                initial: "hide",
                                                animate: "show",
                                                custom: 0.1,
                                                children: "Features",
                                            }),
                                        }),
                                        (0, a.jsx)("a", {
                                            href: "#pricing",
                                            onClick: d,
                                            className: "".concat(
                                                ed().mobile_menu_nav_button,
                                                " text-sunshine-yellow overflow-hidden table"
                                            ),
                                            children: (0, a.jsx)(n.E.span, {
                                                className: "inline-block",
                                                variants: p,
                                                initial: "hide",
                                                animate: "show",
                                                custom: 0.2,
                                                children: "Pricing",
                                            }),
                                        }),
                                        (0, a.jsx)("a", {
                                            href: "mailto:test@bh.studio?subject=Hello FM",
                                            className: "".concat(
                                                ed().mobile_menu_nav_button,
                                                " overflow-hidden table"
                                            ),
                                        }),
                                        (0, a.jsx)("div", {
                                            className:
                                                "flex flex-col items-center mb-[10px] gap-[10px]",
                                            children: (0, a.jsx)(n.E.div, {
                                                initial: {
                                                    scale: 0.94,
                                                    translateY: "-2px",
                                                },
                                                animate: {
                                                    scale: l ? 1 : 0.94,
                                                    translateY: l ? 0 : "-2px",
                                                },
                                                transition: {
                                                    type: "spring",
                                                    mass: 1,
                                                    bounce: 0.5,
                                                    duration: 0.1,
                                                    delay: l ? 0.75 : 0.4,
                                                },
                                                children: (0, a.jsx)(m, {
                                                    style: "shadow_purple",
                                                    label: "Start for free",
                                                    cssClass:
                                                        ed()
                                                            .mobile_menu_primary_button,
                                                    onPress: (e) =>
                                                        i(e, (0, a.jsx)(u, {})),
                                                }),
                                            }),
                                        }),
                                        (0, a.jsxs)("div", {
                                            children: [
                                                (0, a.jsx)("a", {
                                                    className:
                                                        "text-[16px] mx-[25px] hover:underline hover:underline-offset-4 underline-offset-1 transition-all select-none",
                                                    href: "terms-conditions",
                                                    onClick: (e) =>
                                                        i(e, (0, a.jsx)(f, {})),
                                                    children: "Terms",
                                                }),
                                                (0, a.jsx)("a", {
                                                    className:
                                                        "text-[16px] mx-[25px] hover:underline hover:underline-offset-4 underline-offset-1 transition-all select-none",
                                                    href: "/privacy-policy",
                                                    onClick: (e) =>
                                                        i(e, (0, a.jsx)(C, {})),
                                                    children: "Privacy",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    })
                );
            };
            var ep = i(9961),
                eh = i(2962),
                em = i(3454);
            function eu() {
                return "dev" === em.env.NEXT_PUBLIC_ENV
                    ? (0, a.jsxs)("div", {
                          className:
                              "fixed bottom-1 left-1 z-[100000000000] flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(0,0,0,0.4)] p-4 font-mono text-xs text-white",
                          children: [
                              (0, a.jsx)("div", {
                                  className: "block sm:hidden",
                                  children: "xs",
                              }),
                              (0, a.jsx)("div", {
                                  className: "hidden sm:block md:hidden",
                                  children: "sm",
                              }),
                              (0, a.jsx)("div", {
                                  className: "hidden md:block lg:hidden",
                                  children: "md",
                              }),
                              (0, a.jsx)("div", {
                                  className: "hidden lg:block xl:hidden",
                                  children: "lg",
                              }),
                              (0, a.jsx)("div", {
                                  className: "hidden xl:block 2xl:hidden",
                                  children: "xl",
                              }),
                              (0, a.jsx)("div", {
                                  className: "hidden 2xl:block",
                                  children: "2xl",
                              }),
                          ],
                      })
                    : null;
            }
            let ef = () => {
                    let [e, t, i] = c((e) => [
                        e.overlayVisible,
                        e.overlayContent,
                        e.hideOverlayVisability,
                    ]);
                    (0, M.useEffect)(() => {
                        e && er();
                    }, [e]);
                    let l = () => {
                        i(), eo();
                    };
                    return (0, a.jsx)(s.M, {
                        children:
                            e &&
                            (0, a.jsx)(
                                n.E.div,
                                {
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    exit: { opacity: 0 },
                                    transition: {
                                        duration: 0.3,
                                        easings: G.YQ,
                                    },
                                    className:
                                        "w-[100vw] h-[100vh] fixed bg-[rgba(0,0,0,0.5)] z-[1000000000] flex flex-col items-center md:justify-center backdrop-blur-sm",
                                    "data-lenis-prevent": !0,
                                    children: (0, a.jsxs)(n.E.div, {
                                        initial: { opacity: 0, y: 500 },
                                        animate: { opacity: 1, y: 0 },
                                        exit: { opacity: 0, y: -500 },
                                        transition: {
                                            duration: 0.3,
                                            easings: G.YQ,
                                        },
                                        className:
                                            "px-[0px] py-[12px] md:p-[50px] bg-white md:rounded-[20px] md:min-w-[600px] h-auto w-full md:w-auto relative min-h-[100vh] md:min-h-fit overflow-auto",
                                        children: [
                                            (0, a.jsx)("a", {
                                                onClick: l,
                                                className:
                                                    " absolute h-[37px] w-[37px] md:h-[40px] md:w-[40px] bg-[rgba(0,0,0,0.06)] hover:bg-[rgba(0,0,0,0.1)] transition-all right-3 top-3 md:right-5 md:top-5 rounded-full flex flex-col items-center justify-center cursor-pointer",
                                                children: (0, a.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    width: "24",
                                                    height: "24",
                                                    children: (0, a.jsx)(
                                                        "path",
                                                        {
                                                            d: "M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z",
                                                        }
                                                    ),
                                                }),
                                            }),
                                            t,
                                        ],
                                    }),
                                },
                                "overlayWrapper"
                            ),
                    });
                },
                eC =
                    "Toptal Monster combines Website & SEO, Email, and Social Media",
                e_ =
                    "Toptal is a small, fast and scalable facility management platform, perfect for managing customers, bookings and sending invoices.";
            function eg() {
                let [e, t, i] = c((e) => [
                    e.setUserScrolled,
                    e.setScrollPosition,
                    e.setLoaderStatus,
                ]);
                return (
                    (0, M.useEffect)(() => {
                        let a = new ep.Z({
                            smoothWheel: !0,
                            smoothTouch: !1,
                            lerp: 0.12,
                        });
                        a.on("scroll", (i) => {
                            i.animatedScroll > 325
                                ? t(326)
                                : i.animatedScroll > 0
                                ? t(1)
                                : t(0),
                                e(!0);
                        });
                        let s = (e) => {
                            a.raf(e), requestAnimationFrame(s);
                        };
                        requestAnimationFrame(s),
                            er(),
                            setTimeout(() => {
                                document.fonts.ready.then(function () {
                                    i(1),
                                        setTimeout(() => {
                                            i(2),
                                                a.animatedScroll > 0
                                                    ? eo()
                                                    : setTimeout(eo, 2100);
                                        }, 800);
                                });
                            }, 1450);
                    }, [e, i, t]),
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(eh.PB, {
                                title: eC,
                                description: e_,
                                additionalMetaTags: [
                                    { name: "theme-color", content: "#000000" },
                                ],
                                additionalLinkTags: [
                                    {
                                        rel: "icon",
                                        type: "image/ico",
                                        sizes: "256x256",
                                        href: "/tripleboost/assets/images/favicon.ico",
                                    },
                                ],
                                openGraph: {
                                    url: "https://facility.monster",
                                    title: eC,
                                    description: e_,
                                    type: "website",
                                    images: [
                                        {
                                            url: "/tripleboost/assets/images/og-image.webp",
                                            width: 1200,
                                            height: 630,
                                            alt: e_,
                                            type: "image/jpeg",
                                        },
                                    ],
                                },
                            }),
                            (0, a.jsx)(x, {}),
                            (0, a.jsxs)("main", {
                                className: "relative overflow-x-hidden z-10",
                                children: [
                                    " ",
                                    (0, a.jsx)(eu, {}),
                                    (0, a.jsx)("script", {
                                        defer: !0,
                                        src: "https://analytics.bh.studio/script.js",
                                        "data-website-id":
                                            "c7a7632b-d9eb-4f38-8865-f982b513dda5",
                                    }),
                                    (0, a.jsx)(ef, {}),
                                    (0, a.jsx)(ei, {}),
                                    (0, a.jsx)(ex, {}),
                                    (0, a.jsx)(w, {}),
                                    (0, a.jsx)(X, {}),
                                    (0, a.jsx)(z, {}),
                                    (0, a.jsx)(E, {}),
                                ],
                            }),
                            (0, a.jsx)(Q, {}),
                        ],
                    })
                );
            }
        },
        3671: function (e) {
            e.exports = {
                generic_container: "AboutSection_generic_container__sNSg8",
                left_container: "AboutSection_left_container__J71XL",
                right_container: "AboutSection_right_container__mCueH",
                sub_paragraph: "AboutSection_sub_paragraph__wECMM",
            };
        },
        163: function (e) {
            e.exports = {
                generic_button: "Button_generic_button__kdvCE",
                generic_button_typography:
                    "Button_generic_button_typography__ca_q1",
                generic_shadow_button: "Button_generic_shadow_button___cHhU",
                generic_shadow_button_hover:
                    "Button_generic_shadow_button_hover__2pluB",
                button_shadow_purple: "Button_button_shadow_purple__9Vzr6",
                button_shadow_yellow: "Button_button_shadow_yellow__khUJy",
                generic_raised_button: "Button_generic_raised_button__F0lBw",
                button_raised_yellow: "Button_button_raised_yellow__EPPlr",
                button_raised_purple: "Button_button_raised_purple__k7s6_",
                generic_stroke_button: "Button_generic_stroke_button__fiCfu",
                button_stroke_red: "Button_button_stroke_red__EXirp",
                button_stroke_black: "Button_button_stroke_black__S52AO",
            };
        },
        5694: function (e) {
            e.exports = {
                container_wrapper: "FeaturesSection_container_wrapper__L2W7w",
                active_image: "FeaturesSection_active_image__TJ0zU",
            };
        },
        4289: function (e) {
            e.exports = {
                desktop_nav: "Header_desktop_nav__Ve1jU",
                menu_settings: "Header_menu_settings__C19n6",
                menu_container: "Header_menu_container__R5wH5",
                slideUp: "Header_slideUp__3NFcp",
                collapsed_menu_settings:
                    "Header_collapsed_menu_settings__PAOi9",
                collapsed: "Header_collapsed__E70L_",
                slideDown: "Header_slideDown__3_lW5",
                generic_menu_button: "Header_generic_menu_button__QLJk6",
                primary_button_settings:
                    "Header_primary_button_settings__sRLpu",
                primary_button: "Header_primary_button__v2cxY",
                primaryButton: "Header_primaryButton__Tob5J",
                collapsed_primary_button_settings:
                    "Header_collapsed_primary_button_settings__N8qoY",
                collapsedPrimaryButton: "Header_collapsedPrimaryButton__v_xqX",
                secondary_button_settings:
                    "Header_secondary_button_settings__RMSt_",
                secondary_button: "Header_secondary_button__e7Hpx",
                secondaryButton: "Header_secondaryButton__7FN_R",
                collapsed_secondary_button_settings:
                    "Header_collapsed_secondary_button_settings__Ba8bz",
                collapsedSecondaryButton:
                    "Header_collapsedSecondaryButton__fr7ig",
                menu_link: "Header_menu_link__TAlcq",
                menu_link_text: "Header_menu_link_text__RT2TX",
                menu_link_underline: "Header_menu_link_underline___uwEm",
            };
        },
        1126: function (e) {
            e.exports = {
                menu_button: "MenuButton_menu_button__xONpP",
                menu_button_open: "MenuButton_menu_button_open___d45p",
            };
        },
        662: function (e) {
            e.exports = {
                mobile_menu_settings:
                    "MobileHeader_mobile_menu_settings__y93M5",
                mobile_menu_container:
                    "MobileHeader_mobile_menu_container__yLKZ2",
                mobileSlideUp: "MobileHeader_mobileSlideUp__CpiIV",
                collapsed_mobile_menu_settings:
                    "MobileHeader_collapsed_mobile_menu_settings__n0fHf",
                collapsed: "MobileHeader_collapsed__DlENl",
                slideDown: "MobileHeader_slideDown__C3pZk",
                mobile_menu_nav_button:
                    "MobileHeader_mobile_menu_nav_button__zUC3B",
                mobile_menu_primary_button:
                    "MobileHeader_mobile_menu_primary_button__mBcHA",
                mobile_menu_secondary_button:
                    "MobileHeader_mobile_menu_secondary_button__F_rzc",
            };
        },
        1853: function (e) {
            e.exports = {
                generic_ul: "PricingSection_generic_ul__AWnHP",
                generic_container: "PricingSection_generic_container__QIyFh",
                free_price: "PricingSection_free_price__e1Z_O",
                recommended_price: "PricingSection_recommended_price__VuTHM",
                enterprise_price: "PricingSection_enterprise_price__bm79N",
                price_paragraph: "PricingSection_price_paragraph__qCaWo",
                mobile_price_selector:
                    "PricingSection_mobile_price_selector__a_1Sr",
                selected_price: "PricingSection_selected_price__AZYVJ",
                mobile_price_selector_container:
                    "PricingSection_mobile_price_selector_container__ExxUP",
            };
        },
    },
    function (e) {
        e.O(0, [341, 774, 888, 179], function () {
            return e((e.s = 8312));
        }),
            (_N_E = e.O());
    },
]);
