function SvgComponent(props: object) {
    return (
        <svg
            width={60}
            height={60}
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect width={60} height={60} rx={6} fill="#C75E5E" />
            <g clipPath="url(#clip0_1_4115)">
                <path
                    d="M22.8 41.887a1.205 1.205 0 01-1.221-.12c-.386-.263-.579-.646-.579-1.15V20.746c0-.755.252-1.402.756-1.94s1.11-.807 1.815-.806H36.43c.707 0 1.312.27 1.816.807A2.73 2.73 0 0139 20.746v19.87c0 .504-.193.888-.579 1.151a1.201 1.201 0 01-1.221.12L30 38.592l-7.2 3.295z"
                    fill="#fff"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_4115">
                    <path fill="#fff" transform="translate(21 18)" d="M0 0H18V24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default SvgComponent
