import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';


// function App() {
//   return (
//     <DocSearch
//       appId="YOUR_APP_ID"
//       indexName="YOUR_INDEX_NAME"
//       apiKey="YOUR_SEARCH_API_KEY"
//     />
//   );
// }
// export default App;

const FeatureList = [
  {
    title: 'SMS',
    Svg: require('@site/static/img/email.svg').default,
    description: (
      <>
       
Send and receive SMS to more than 300 million mobile subscribers across Africa.
      </>
    ),
  },
  // {
  //   title: 'Voice',
  //   Svg: require('@site/static/img/voice.svg').default,
  //   description: (
  //     <>
  //       Build dynamic, scalable, fully-featured voice applications that reside entirely in the cloud using our Voice APIs without the need to purchase and maintain expensive voice equipment. This reduces your business costs while increasing the efficiency of how you reach your users.
  //     </>
  //   ),
  // },
  {
    title: 'USSD',
    Svg: require('@site/static/img/hash.svg').default,
    description: (
      <>
       Build dynamic, scalable, fully featured USSD applications.


      </>
    ),
  },
  {
    title: 'Whatsapp',
    Svg: require('@site/static/img/hash.svg').default,
    description: (
      <>
       Build dynamic, scalable, fully featured Whatsapp.


      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures()  {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// export default App();