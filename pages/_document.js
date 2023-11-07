// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* 在這裡加入 Google Maps API 的 <script> 標籤，替換 YOUR_GOOGLE_MAPS_API_KEY_HERE 為您的 API 金鑰 */}
          <script
            async
            defer
            src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAbErRzWTOtV_zY0P9cYrWhyssDqh7wFvQ`}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
