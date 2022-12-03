import ScreenLoading from "../ScreenLoading/ScreenLoading";
import React, {Suspense} from "react";

interface LazyComponentProps {
	children: JSX.Element
}

const LazyComponent = (props: LazyComponentProps) => {
	return <Suspense fallback={<ScreenLoading/>}>{props.children}</Suspense>
}

export default LazyComponent
