import { useDispatch } from 'react-redux'

import { CredentialCard } from '../components/CredentialCard'

export const DashBoard = () => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          backgroundColor: '#7392FF',
          display: 'flex',
          justifyContent: 'space-between',
          padding: 20,
          marginBottom: 20,
        }}
      >
        <div style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: 'green' }} />
        <div
          style={{
            color: 'white',
            marginTop: 50,
            width: '35vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          <h1
            style={{
              width: '70%',
              fontSize: 70,
            }}
          >
            Claim <b>YOUR</b> data today.
          </h1>
          <h3 style={{ fontWeight: 'bold', fontSize: 18 }}>
            We have gathered all available information about you, for you! Below you will find all the credentials ready
            for you to claim. New ones are added everyday.
          </h3>
        </div>
        <div style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: 'red' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '45%' }}>
          <b style={{ fontSize: 50, width: '100%' }}>Selected for you</b>
          <h1 style={{ fontSize: 18, width: '100%', color: 'grey' }}>These are ready to be claimed by you!</h1>
          <CredentialCard
            title="student pass"
            subTitle="Hogeschool Utrecht"
            cardColor="#0099ff"
            organizationsCount={19}
          />
          <CredentialCard title="College diploma" subTitle="DUO" cardColor="#141414" organizationsCount={41} />
          <CredentialCard title="Free Box" subTitle="Hello Fresh" cardColor="#90D814" />
          <CredentialCard title="Drivers' License" subTitle="CBR" cardColor="#154272" organizationsCount={281} />
          <CredentialCard
            title="student pass"
            subTitle="Hogeschool Utrecht"
            cardColor="#0099ff"
            organizationsCount={19}
          />
          <CredentialCard title="College diploma" subTitle="DUO" cardColor="#141414" organizationsCount={41} />
          <CredentialCard title="Free Box" subTitle="Hello Fresh" cardColor="#90D814" />
          <CredentialCard title="Drivers' License" subTitle="CBR" cardColor="#154272" organizationsCount={281} />
          <CredentialCard title="U pas" subTitle="Utrecht" cardColor="#ce070d" organizationsCount={83} />
          <CredentialCard title="U pas" subTitle="Utrecht" cardColor="#ce070d" organizationsCount={83} />
        </div>
      </div>
    </div>
  )
}
