declare namespace JSX {
	export interface AmpImg {
		alt?: string;
		src?: string;
		width?: string;
		height?: string;
		layout?: string;
    className?: string;
	}
	export interface IAmphtmlSizerIntrinsic {
		slot?: string;
    className?: string;
	}
	export interface IntrinsicElements {
		'amp-img': AmpImg;
		'i-amphtml-sizer-intrinsic': IAmphtmlSizerIntrinsic;
	}
}