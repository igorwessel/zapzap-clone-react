import React from 'react'
import { FiUsers } from 'react-icons/fi'

import styles from './styles.module.css'

const Home = props => (
    <div className={styles.home}>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg"
            width="90%"
            viewBox="0 0 795 990"
            id="logo-home"
            tabIndex="-1">
                <path id="hand-path"
                    fill="#f8c293" stroke="#f8c293" strokeWidth="1"
                    d="M 631.00,88.00
                        C 631.00,88.00 632.00,124.00 632.00,124.00
                            632.00,124.00 632.00,193.00 632.00,193.00
                            632.00,193.00 664.00,165.17 664.00,165.17
                            664.00,165.17 682.00,149.07 682.00,149.07
                            694.00,138.18 698.20,133.70 698.00,117.00
                            697.87,106.57 693.76,100.60 687.05,93.00
                            676.77,81.37 668.25,75.21 652.00,77.18
                            643.20,78.25 637.80,83.01 631.00,88.00 Z
                        M 38.00,753.00
                        C 42.05,758.60 44.26,759.50 49.00,764.04
                            49.00,764.04 78.00,791.04 78.00,791.04
                            78.00,791.04 155.00,862.91 155.00,862.91
                            155.00,862.91 178.00,884.01 178.00,884.01
                            178.00,884.01 204.00,908.17 204.00,908.17
                            204.00,908.17 214.00,917.72 214.00,917.72
                            216.46,919.88 224.30,927.80 227.00,927.80
                            229.67,927.80 233.20,923.80 235.00,922.00
                            235.00,922.00 252.91,903.00 252.91,903.00
                            252.91,903.00 298.91,854.00 298.91,854.00
                            298.91,854.00 323.00,828.02 323.00,828.02
                            330.43,820.83 337.40,823.07 347.00,821.39
                            364.53,818.30 376.38,814.90 393.00,808.58
                            422.49,797.35 455.42,777.05 481.00,758.58
                            481.00,758.58 504.00,741.00 504.00,741.00
                            499.57,739.24 490.10,740.00 485.00,740.00
                            485.00,740.00 446.00,740.00 446.00,740.00
                            446.00,740.00 310.00,740.00 310.00,740.00
                            304.95,739.99 300.89,739.76 296.00,738.23
                            291.62,736.86 287.41,734.06 284.17,730.83
                            273.39,720.05 275.00,708.82 275.00,695.00
                            275.00,695.00 275.00,670.00 275.00,670.00
                            275.00,670.00 275.00,437.00 275.00,437.00
                            275.00,437.00 254.00,443.00 254.00,443.00
                            254.00,443.00 260.31,426.00 260.31,426.00
                            265.82,410.52 274.98,381.95 275.00,366.00
                            275.00,366.00 275.00,237.00 275.00,237.00
                            274.97,217.81 262.49,185.65 247.00,173.90
                            242.82,170.73 237.23,167.24 232.00,166.33
                            215.28,163.40 208.02,176.70 206.00,191.00
                            205.61,193.74 205.12,196.22 205.32,199.00
                            205.32,199.00 205.99,209.00 205.99,209.00
                            205.99,209.00 205.09,218.00 205.09,218.00
                            201.37,272.11 177.02,329.54 155.58,379.00
                            155.58,379.00 139.45,415.00 139.45,415.00
                            129.83,439.04 121.13,474.13 121.00,500.00
                            121.00,500.00 120.00,514.00 120.00,514.00
                            120.00,514.00 121.00,536.00 121.00,536.00
                            121.17,550.06 126.39,578.97 129.89,593.00
                            129.89,593.00 139.42,624.00 139.42,624.00
                            140.43,626.67 144.04,634.11 143.41,636.58
                            142.78,639.07 136.03,645.89 134.03,648.00
                            134.03,648.00 113.03,671.00 113.03,671.00
                            113.03,671.00 59.17,730.00 59.17,730.00
                            59.17,730.00 38.00,753.00 38.00,753.00 Z
                        M 646.00,276.52
                        C 635.69,279.29 628.43,286.11 620.00,292.37
                            620.00,292.37 601.00,306.29 601.00,306.29
                            587.93,315.65 575.76,323.06 575.04,341.00
                            574.62,351.31 578.22,357.86 584.00,366.00
                            591.86,377.08 599.62,384.83 614.00,385.00
                            631.05,385.20 638.02,377.27 651.00,367.63
                            651.00,367.63 669.00,354.42 669.00,354.42
                            683.84,343.71 694.45,337.22 693.99,317.00
                            693.78,307.90 691.00,303.27 685.98,296.00
                            675.41,280.70 664.96,273.52 646.00,276.52 Z
                        M 654.00,409.46
                        C 641.27,412.30 637.05,417.29 627.00,424.58
                            627.00,424.58 605.00,440.63 605.00,440.63
                            591.66,450.54 581.08,456.58 581.00,475.00
                            580.99,478.55 580.86,481.52 581.76,485.00
                            583.31,491.02 586.26,495.08 589.88,500.00
                            597.69,510.60 605.17,517.77 619.00,518.82
                            630.39,519.68 639.23,513.56 648.00,507.29
                            648.00,507.29 684.00,480.85 684.00,480.85
                            690.97,475.68 696.30,469.60 698.49,461.00
                            701.99,447.20 697.85,437.95 689.63,427.00
                            680.07,414.28 670.47,407.19 654.00,409.46 Z
                        M 652.00,547.44
                        C 637.00,550.22 631.90,556.34 620.00,565.12
                            620.00,565.12 600.00,579.85 600.00,579.85
                            585.13,590.70 576.77,596.34 577.00,616.00
                            577.11,625.15 579.84,629.73 585.00,637.00
                            594.37,650.21 604.79,659.24 622.00,656.70
                            631.10,655.36 637.86,650.21 645.00,644.87
                            645.00,644.87 672.00,625.00 672.00,625.00
                            681.21,618.43 690.37,612.37 693.95,601.00
                            698.34,587.02 694.43,577.37 686.29,566.00
                            677.85,554.21 667.31,545.81 652.00,547.44 Z" />
                <path id="cellphone-path"
                    fill="#1a1a1a" stroke="black" strokeWidth="1"
                    d="M 632.00,654.00
                        C 621.71,658.08 615.68,659.26 605.00,655.29
                            594.90,651.54 598.31,648.02 586.00,648.00
                            586.00,648.00 542.00,648.00 542.00,648.00
                            542.00,648.00 294.00,648.00 294.00,648.00
                            294.00,648.00 294.00,141.00 294.00,141.00
                            294.00,141.00 614.00,141.00 614.00,141.00
                            614.00,141.00 614.00,296.00 614.00,296.00
                            617.60,293.93 629.17,286.06 630.98,282.83
                            632.00,281.01 631.96,279.02 632.00,277.00
                            632.00,277.00 632.00,239.00 632.00,239.00
                            632.00,239.00 632.00,101.00 632.00,101.00
                            631.99,96.20 631.83,92.69 630.51,88.00
                            626.96,75.39 615.71,68.06 603.00,68.00
                            603.00,68.00 556.00,68.00 556.00,68.00
                            556.00,68.00 306.00,68.00 306.00,68.00
                            292.24,68.02 281.17,74.12 277.04,88.00
                            275.89,91.87 276.01,94.07 276.00,98.00
                            276.00,98.00 276.00,216.00 276.00,216.00
                            276.00,216.00 276.00,708.00 276.00,708.00
                            276.03,727.50 287.46,738.97 307.00,739.00
                            307.00,739.00 392.00,739.00 392.00,739.00
                            392.00,739.00 600.00,739.00 600.00,739.00
                            620.13,738.97 631.90,727.19 632.00,707.00
                            632.00,707.00 632.00,654.00 632.00,654.00 Z
                        M 400.04,98.14
                        C 400.04,98.14 435.00,98.14 435.00,98.14
                            435.00,98.14 501.00,98.14 501.00,98.14
                            503.45,98.00 507.52,97.76 509.63,99.17
                            512.52,101.20 512.73,106.80 509.63,108.83
                            507.59,110.22 503.48,110.00 501.00,110.00
                            501.00,110.00 422.00,110.00 422.00,110.00
                            418.12,110.00 401.59,110.43 399.11,109.40
                            394.46,107.47 393.52,101.30 400.04,98.14 Z
                        M 631.00,382.00
                        C 624.17,385.16 621.51,385.93 614.00,386.00
                            614.00,386.00 614.00,433.00 614.00,433.00
                            617.71,431.09 629.03,423.79 631.01,420.54
                            632.24,418.51 632.00,415.33 632.00,413.00
                            632.01,406.53 632.94,386.88 631.00,382.00 Z
                        M 614.00,519.00
                        C 614.00,519.00 614.00,569.00 614.00,569.00
                            614.00,569.00 630.98,555.70 630.98,555.70
                            630.98,555.70 632.00,544.00 632.00,544.00
                            632.00,544.00 632.00,518.00 632.00,518.00
                            632.00,518.00 614.00,519.00 614.00,519.00 Z
                        M 439.00,674.22
                        C 439.00,674.22 463.00,674.22 463.00,674.22
                            467.64,674.07 471.01,674.52 474.20,678.33
                            477.94,682.80 477.00,689.49 477.00,695.00
                            477.00,704.65 479.29,717.48 467.00,720.47
                            464.51,721.08 461.57,721.00 459.00,721.00
                            451.16,721.01 440.11,722.69 434.21,716.79
                            430.24,712.81 430.03,709.25 430.00,704.00
                            429.95,693.67 427.21,679.11 439.00,674.22 Z" />
                <path id="cellphone-button"
                    fill="#e6e6e6" stroke="black" strokeWidth="1"
                    d="M 398.31,100.02
                    C 395.42,103.15 395.31,107.39 400.06,108.90
                        400.06,108.90 419.00,108.90 419.00,108.90
                        419.00,108.90 502.00,108.90 502.00,108.90
                        503.99,109.00 507.81,109.23 509.40,107.98
                        511.71,106.15 511.40,100.93 508.69,99.60
                        507.21,98.87 503.71,99.00 502.00,99.00
                        502.00,99.00 431.00,99.00 431.00,99.00
                        424.03,99.00 403.65,97.99 398.31,100.02 Z
                    M 440.00,674.59
                    C 436.59,676.09 433.96,677.55 432.17,681.02
                        430.24,684.77 430.94,700.93 431.00,706.00
                        431.06,710.08 431.31,713.53 434.39,716.61
                        439.37,721.58 453.12,720.01 460.00,720.00
                        462.81,720.00 466.36,720.13 469.00,719.11
                        479.41,715.08 477.11,699.10 477.00,690.00
                        476.94,685.72 476.62,681.57 473.58,678.22
                        471.80,676.26 469.55,675.15 467.00,674.59
                        462.67,673.48 444.51,673.72 440.00,674.59 Z" />
                <path id="cellphone-screen"
                    fill="#328e61" stroke="#328e61" strokeWidth="3"
                    d="M 293.00,648.00
                    C 293.00,648.00 593.00,648.00 593.00,648.00
                        582.00,632.14 569.49,620.70 579.32,600.00
                        580.82,596.85 582.90,593.70 585.30,591.17
                        589.61,586.61 599.56,579.95 605.00,575.87
                        607.29,574.16 611.63,571.24 612.98,568.83
                        614.21,566.63 614.00,563.46 614.00,561.00
                        614.00,561.00 614.00,527.00 614.00,527.00
                        614.00,524.90 614.24,521.29 612.98,519.56
                        611.22,517.13 606.08,517.09 599.00,510.82
                        589.90,502.75 580.01,488.59 580.01,476.00
                        580.01,463.67 585.43,455.31 595.00,447.89
                        598.77,444.96 611.94,436.37 613.40,432.83
                        614.12,431.08 614.00,427.93 614.00,426.00
                        614.00,426.00 614.00,386.00 614.00,386.00
                        609.07,385.59 604.37,384.51 600.00,382.10
                        588.33,375.66 575.49,357.50 574.33,344.00
                        574.07,341.02 574.74,337.88 575.48,335.00
                        578.95,321.50 586.27,316.66 597.00,309.00
                        600.93,306.19 611.82,299.06 613.40,294.96
                        614.12,293.11 614.00,290.02 614.00,288.00
                        614.00,288.00 614.00,140.00 614.00,140.00
                        614.00,140.00 302.00,140.00 302.00,140.00
                        302.00,140.00 294.60,141.02 294.60,141.02
                        294.60,141.02 293.00,147.00 293.00,147.00
                        293.00,147.00 293.00,168.00 293.00,168.00
                        293.00,168.00 293.00,258.00 293.00,258.00
                        293.00,258.00 293.00,648.00 293.00,648.00 Z" />
            </svg>
        </div>
        <h1>Whatsapp Clone feito em React para aprendizado</h1>
        <p>Desenvolvido por <a href="https://github.com/igorwessel" target="_blank" rel='noreferrer noopener'>Igor Wessel da Silva</a></p>
        <span className={styles.line}></span>
        <span>
            <FiUsers size={24}/> Adicione um contato para começar a utilizar.
        </span>
    </div>
)

export default Home