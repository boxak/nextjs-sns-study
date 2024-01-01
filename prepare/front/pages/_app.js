import PropTypes from "prop-types";
import Head from 'next/head';

// 모든 페이지들의 공통인 부분을 담당.
// 레이아웃.js는 일부 공통인 페이지를 위해서 사용하면 될듯
const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component/>
        </>
    )
}

App.propTypes = {
    Component : PropTypes.elementType.isRequired,
}

export default App;