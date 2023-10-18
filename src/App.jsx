import React from 'react';

function PricingList(props) {
  const parStyle = {
    textAlign: 'center',
    color: 'gray',
  };

  const headStyle = {
    textAlign: 'center',
    fontSize: '35px',
    fontWeight: 'bold',
  };

  const ulStyle = {
    textAlign: 'left',
    listStyleType: 'none',
    margin: '20px',
  };

  const btnStyle = {
    display: 'block',
    width: '100%',
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '20px',
    textAlign: 'center',
    margin: '0 auto',
  };

  return (
    <div>
      <p style={parStyle}>{props.title}</p>
      <h1 style={headStyle}>{props.price}</h1>
      <hr />
      <ul style={ulStyle}>
        {props.features.map((feature, index) => (
          <li key={index} style={{ color: feature.enable ? 'black' : 'gray' }}>
            {feature.enable ? '✓ ' : '✗ '}
            {feature.feature}
          </li>
        ))}
      </ul>
      <button style={btnStyle}>{props.buttonText}</button>
    </div>
  );
}

function App() {
  const containerStyle = {
    background: 'linear-gradient(to bottom, #0074e4, #0052d4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'left',
    width: '65%',
    height: 'auto',
  };

  const columnStyle = {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    background: 'white',
    marginLeft: '20px',  
    marginRight: '20px',  
    marginTop: '10px',   
    marginBottom: '10px',  
    padding: '6px',
    borderRadius: '30px',
  };

  const freePlan = {
    title: 'FREE',
    price: '$0/month',
    features: [
      { feature: 'Single user', enable: true },
      { feature: '50GB Storage', enable: true },
      { feature: 'Unlimited Public Projects', enable: true },
      { feature: 'Community Access', enable: true },
      { feature: 'Unlimited Private Projects', enable: true },
      { feature: 'Dedicated Phone support', enable: false },
      { feature: 'Free Subdomain', enable: false },
      { feature: 'Monthly Status Report', enable: false },
    ],
    buttonText: 'Button',
  };

  const plusPlan = {
    title: 'PLUS',
    price: '$9/month',
    features: [
      { feature: 'Single user', enable: true },
      { feature: '50GB Storage', enable: true },
      { feature: 'Unlimited Public Projects', enable: true },
      { feature: 'Community Access', enable: true },
      { feature: 'Unlimited Private Projects', enable: true },
      { feature: 'Dedicated Phone support', enable: true },
      { feature: 'Free Subdomain', enable: true },
      { feature: 'Monthly Status Report', enable: false },
    ],
    buttonText: 'Button',
  };

  const proPlan = {
    title: 'PRO',
    price: '$49/month',
    features: [
      { feature: 'Single user', enable: true },
      { feature: '50GB Storage', enable: true },
      { feature: 'Unlimited Public Projects', enable: true },
      { feature: 'Community Access', enable: true },
      { feature: 'Unlimited Private Projects', enable: true },
      { feature: 'Dedicated Phone support', enable: true },
      { feature: 'Free Subdomain', enable: true },
      { feature: 'Monthly Status Report', enable: true },
    ],
    buttonText: 'Button',
  };

  return (
    <div id="container" style={containerStyle}>
      <div id="column1" style={columnStyle}>
        <PricingList {...freePlan} />
      </div>

      <div id="column2" style={columnStyle}>
        <PricingList {...plusPlan} />
      </div>

      <div id="column3" style={columnStyle}>
        <PricingList {...proPlan} />
      </div>
    </div>
  );
}

export default App;
