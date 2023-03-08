import React from "react";
import { motion } from "framer-motion";
export default function HeroText() {
    const opac = {
        initial: {
            pathLength: 0,
            fillOpacity: 0
        },
        animate: {
            pathLength: 2,
            fillOpacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .1, .1, .2, .3, .4, .5, .6, .8, .9, 1],
            transition: {
                duration: 2.1,
                delay: .2,
                ease: "easeIn"
            }
        }
    }
    return (
        <>
<motion.svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    className="w-[480pt] h-[280pt]"
  viewBox="0 0 1300.000000 1200.000000"
 preserveAspectRatio="xMidYMid meet">

<motion.g transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)"
fill="black" stroke="none">
<motion.path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={15}
                    stroke="black"
                    animate="animate"
                    initial="initial"
                    variants={opac} d="M9115 10864 c-349 -77 -564 -408 -565 -869 0 -361 148 -666 385 -792
124 -65 183 -78 355 -77 138 1 168 4 270 31 63 17 152 47 197 68 l82 38 3 338
3 339 -61 0 -62 0 6 -349 5 -348 -79 -26 c-188 -63 -382 -81 -502 -49 -225 61
-382 272 -437 587 -21 119 -21 364 0 483 64 369 256 588 534 609 87 6 228 -15
316 -48 76 -28 173 -96 210 -147 44 -60 73 -55 41 7 -39 75 -165 154 -309 193
-100 26 -299 33 -392 12z"/>
<motion.path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={15}
                    stroke="black"
                    animate="animate"
                    initial="initial"
                    variants={opac} d="M1770 9995 l0 -865 388 2 c379 3 387 3 387 23 0 15 -5 19 -20 16 -11
-2 -156 -6 -323 -8 l-302 -5 2 851 3 851 -67 0 -68 0 0 -865z"/>
<motion.path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={15}
                    stroke="black"
                    animate="animate"
                    initial="initial"
                    variants={opac} d="M3130 10296 c-84 -18 -146 -54 -210 -123 -109 -116 -162 -275 -162
-487 0 -219 50 -366 162 -469 82 -77 147 -100 260 -95 67 3 96 10 140 32 98
49 204 173 240 280 21 64 4 50 -33 -28 -92 -195 -246 -263 -411 -182 -59 29
-134 102 -164 162 -52 101 -67 181 -67 344 0 85 3 163 7 173 7 16 33 17 348
17 386 0 349 -10 330 90 -30 157 -132 261 -285 289 -70 13 -84 13 -155 -3z
m206 -54 c56 -29 100 -82 119 -144 20 -69 19 -91 -6 -114 -18 -16 -45 -19
-202 -25 -100 -4 -219 -8 -264 -8 l-81 -1 10 38 c30 112 111 220 193 259 42
20 61 23 120 20 45 -2 85 -11 111 -25z"/>
<motion.path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={15}
                    stroke="black"
                    animate="animate"
                    initial="initial"
                    variants={opac} d="M4235 10295 c-134 -28 -247 -104 -294 -200 l-20 -40 -1 123 c0 67 -3
122 -7 122 -3 0 -30 -8 -60 -17 l-53 -17 0 -568 0 -568 63 0 62 0 -3 443 -3
443 29 54 c48 93 153 154 290 166 99 9 146 -7 209 -71 41 -42 56 -67 72 -120
20 -63 21 -91 21 -491 l0 -424 66 0 c53 0 65 3 61 14 -3 8 -7 216 -8 464 -2
516 -8 484 93 552 71 47 138 65 248 65 128 0 191 -41 247 -160 l28 -60 0 -437
0 -438 63 0 62 0 0 403 c0 433 -6 504 -45 594 -65 146 -184 204 -361 174 -155
-26 -260 -83 -321 -174 l-32 -47 -24 53 c-31 68 -79 123 -131 149 -52 27 -157
32 -251 13z"/>
<motion.path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={15}
                    stroke="black"
                    animate="animate"
                    initial="initial"
                    variants={opac} d="M6023 10295 c-191 -42 -333 -187 -390 -396 -23 -87 -23 -280 0 -369
56 -215 205 -361 405 -400 83 -17 219 -7 300 20 161 56 287 209 328 400 18 87
18 245 -2 333 -68 306 -336 478 -641 412z m279 -48 c109 -54 200 -189 234
-347 23 -109 15 -339 -16 -435 -70 -223 -237 -346 -426 -315 -160 26 -271 145
-326 349 -29 107 -29 323 0 433 45 168 125 272 250 325 80 34 203 29 284 -10z"/>
<motion.path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={15}
                    stroke="black"
                    animate="animate"
                    initial="initial"
                    variants={opac} d="M7342 10295 c-124 -27 -219 -89 -281 -182 l-31 -46 0 116 c0 64 -3
117 -7 117 -3 0 -30 -8 -60 -17 l-53 -17 0 -568 0 -568 63 0 62 0 -3 437 c-3
502 -5 492 79 567 60 53 139 85 231 93 131 11 213 -37 259 -152 l24 -60 0
-442 0 -443 60 0 60 0 -3 257 c-6 632 -8 685 -27 738 -58 160 -174 213 -373
170z"/>
<motion.path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={15}
                    stroke="black"
                    animate="animate"
                    initial="initial"
                    variants={opac} d="M10503 10296 c-89 -28 -148 -81 -189 -170 l-23 -49 -5 34 c-3 19 -8
69 -11 112 -4 48 -11 77 -18 77 -7 0 -29 -8 -50 -18 l-38 -17 -2 -568 -2 -567
63 0 62 0 0 460 c0 449 1 462 21 503 28 55 56 85 101 108 51 26 104 24 205 -8
104 -32 136 -26 141 26 4 44 -18 67 -79 80 -65 14 -124 13 -176 -3z"/>
<motion.path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={15}
                    stroke="black"
                    animate="animate"
                    initial="initial"
                    variants={opac} d="M11323 10295 c-166 -36 -295 -142 -361 -296 -51 -117 -67 -313 -37
-452 68 -324 374 -499 698 -401 10 3 -10 -30 -50 -83 -38 -49 -88 -119 -111
-156 -24 -36 -52 -69 -61 -72 -10 -3 -69 6 -132 19 -146 32 -388 71 -554 92
-180 21 -601 30 -745 15 -414 -44 -699 -145 -766 -274 -19 -36 -10 -63 26 -82
51 -26 76 -19 71 22 -2 16 74 76 134 105 99 49 268 95 455 123 147 23 606 31
808 15 273 -21 662 -83 662 -105 0 -7 -82 -143 -183 -301 -101 -159 -228 -362
-282 -451 l-98 -163 -4619 0 c-4394 0 -4619 -1 -4616 -17 3 -17 233 -18 4605
-23 l4602 -5 -71 -125 c-159 -281 -308 -596 -399 -845 l-47 -130 -79 -44 c-43
-24 -153 -88 -245 -142 -387 -230 -609 -325 -682 -291 -24 11 -26 17 -26 71 0
84 27 161 129 368 111 226 129 277 113 332 -7 22 -27 52 -47 70 -49 43 -86 41
-162 -8 -66 -42 -263 -223 -448 -411 -104 -105 -158 -150 -180 -150 -21 0 57
166 135 286 61 93 64 122 16 170 -19 19 -41 34 -50 34 -40 0 -144 -124 -181
-217 l-23 -56 -128 -32 c-236 -59 -464 -161 -882 -394 -204 -113 -301 -151
-412 -158 -88 -6 -119 5 -168 62 -96 108 -116 272 -50 404 l23 46 55 -2 c133
-5 235 34 363 136 70 57 107 107 107 146 0 53 -64 104 -155 125 -42 9 -59 8
-119 -10 -176 -54 -317 -166 -393 -315 l-42 -80 -173 -86 c-194 -97 -311 -145
-443 -185 -73 -21 -112 -27 -205 -28 -107 -1 -119 1 -172 27 -69 34 -126 95
-175 190 -35 66 -107 137 -138 137 -25 0 -354 -351 -525 -560 -192 -235 -338
-401 -357 -408 -31 -9 -6 118 56 300 76 218 151 369 312 626 44 68 79 128 79
133 0 4 -15 19 -33 33 -65 50 -142 28 -210 -60 -33 -42 -41 -47 -84 -50 -68
-5 -130 -20 -271 -65 -199 -64 -393 -156 -745 -351 -212 -119 -309 -156 -422
-165 -95 -7 -141 15 -192 94 -69 108 -80 237 -32 358 l24 60 90 1 c58 0 109 7
142 18 70 23 161 84 233 154 56 54 60 61 60 103 0 53 -20 77 -90 108 -79 34
-109 35 -196 6 -213 -71 -368 -227 -419 -421 -40 -153 6 -294 140 -429 71 -72
137 -106 221 -113 131 -10 254 37 594 228 331 186 566 293 763 345 51 14 98
25 104 25 7 0 -5 -29 -28 -66 -89 -146 -191 -412 -223 -583 -22 -116 -21 -285
2 -330 19 -38 72 -71 112 -71 52 1 72 21 350 360 255 309 509 600 547 623 8 5
20 -8 38 -42 39 -78 138 -177 214 -216 219 -109 440 -66 932 181 l109 54 0
-68 c0 -88 20 -153 70 -231 118 -182 256 -241 450 -192 104 26 202 72 435 205
204 117 356 195 495 254 104 44 262 98 316 108 l34 6 -6 -45 c-15 -104 50
-227 120 -227 41 0 78 31 251 209 224 230 353 341 437 376 l38 15 -12 -27 c-7
-16 -37 -71 -67 -123 -112 -194 -141 -284 -141 -430 0 -100 17 -161 58 -203
108 -114 234 -74 783 252 139 83 254 150 255 148 1 -1 -6 -38 -16 -81 -54
-225 -63 -483 -21 -566 51 -100 109 -135 226 -135 71 0 88 4 148 33 95 47 264
161 537 362 240 177 426 310 434 310 2 0 -7 -32 -20 -70 -30 -86 -25 -128 21
-178 56 -62 186 -73 316 -27 80 29 200 56 219 50 41 -13 64 -118 40 -181 -6
-15 -27 -45 -46 -66 -50 -56 -91 -144 -78 -166 12 -19 45 -27 79 -18 28 7 112
119 149 198 22 46 52 81 154 175 70 64 172 152 227 196 101 80 118 100 91 110
-31 12 -146 -65 -322 -215 l-110 -95 -31 47 c-69 104 -175 115 -407 41 -103
-32 -132 -38 -144 -29 -35 29 16 191 112 351 86 146 234 272 308 265 50 -5 78
-54 78 -134 0 -66 20 -104 55 -104 8 0 24 9 35 20 30 30 28 150 -3 205 -35 62
-111 96 -212 96 -70 0 -87 -4 -151 -35 -113 -56 -190 -134 -278 -281 -32 -52
-52 -68 -258 -207 -123 -82 -326 -228 -453 -322 -394 -295 -493 -341 -579
-265 -61 53 -69 132 -36 334 37 231 79 359 221 682 79 180 276 580 372 758
l76 140 1678 5 c1588 5 1678 6 1681 23 3 16 -81 17 -1662 17 -916 0 -1666 2
-1666 5 0 30 462 778 526 853 l31 37 319 -63 c521 -102 774 -132 1098 -132
302 0 567 33 676 83 49 23 150 119 150 142 0 10 -11 15 -32 15 -24 0 -40 -10
-69 -41 -31 -33 -53 -46 -126 -69 -157 -50 -309 -65 -658 -65 -198 0 -348 5
-415 13 -279 35 -877 146 -898 166 -10 9 10 44 98 171 61 87 109 166 108 174
-2 9 -17 25 -33 36 l-31 19 67 63 c119 113 173 255 173 458 0 198 -49 332
-163 445 -127 126 -304 175 -488 135z m275 -49 c107 -55 187 -168 228 -321 25
-95 25 -320 1 -419 -41 -165 -137 -292 -254 -336 -86 -33 -192 -30 -272 5
-120 54 -212 191 -247 364 -24 124 -16 318 19 426 40 123 101 211 182 263 64
41 112 52 205 49 69 -3 95 -9 138 -31z m-8188 -3320 c0 -27 -95 -112 -161
-145 -75 -37 -149 -52 -149 -30 0 7 24 36 53 64 86 84 257 157 257 111z m3876
-15 c-37 -70 -174 -159 -262 -169 -44 -5 -46 -4 -35 15 36 69 210 183 278 183
l34 0 -15 -29z"/>
<motion.path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={15}
                    stroke="black"
                    animate="animate"
                    initial="initial"
                    variants={opac} d="M13627 10300 c-169 -30 -305 -180 -359 -396 -28 -114 -30 -323 -5
-428 38 -152 125 -273 234 -324 50 -23 71 -27 153 -27 88 0 101 3 162 33 87
43 170 131 216 230 18 41 31 76 28 80 -8 7 -7 9 -44 -70 -69 -143 -170 -215
-287 -206 -163 14 -284 134 -336 336 -20 77 -26 248 -13 345 l7 47 341 2 341
3 -3 45 c-10 142 -94 263 -214 308 -67 25 -156 34 -221 22z m210 -66 c62 -39
101 -95 112 -164 17 -105 17 -105 -338 -116 l-223 -6 7 23 c36 117 84 197 146
244 60 45 95 55 176 51 59 -2 82 -8 120 -32z"/>
<motion.path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={15}
                    stroke="black"
                    animate="animate"
                    initial="initial"
                    variants={opac} d="M12170 10289 c0 -6 20 -66 45 -133 25 -66 117 -328 203 -581 102
-298 162 -460 171 -460 8 0 75 178 188 505 95 278 187 540 203 583 35 92 36
97 11 97 -17 0 -43 -71 -187 -510 -92 -280 -170 -510 -174 -510 -6 0 -321 988
-320 1008 0 8 -20 12 -70 12 -45 0 -70 -4 -70 -11z"/>
<motion.path strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={15}
                    stroke="black"
                    animate="animate"
                    initial="initial"
                    variants={opac} d="M1560 5215 c0 -13 716 -15 6380 -15 5664 0 6380 2 6380 15 0 13 -716
15 -6380 15 -5664 0 -6380 -2 -6380 -15z"/>
</motion.g>
</motion.svg>
</>
    )
};