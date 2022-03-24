import { useEffect, useState } from 'react'
import { FiUser } from 'react-icons/fi'

import { CredentialCardContainer } from './dashboard/CredentialCardContainer'
import { SearchBar } from './dashboard/SearchBar'

export const DashBoard = () => {
  const [searchInput, setSearchInput] = useState('')
  const credentials = [
    {
      title: 'College Diploma',
      subtitle: 'DUO',
      cardColor: '#141414',
      organizationsCount: 41,
      tags: ['school', 'diploma'],
    },
    { title: 'College Diploma', subtitle: 'DUO', cardColor: '#141414', organizationsCount: 41 },
    { title: 'College Diploma', subtitle: 'DUO', cardColor: '#141414', organizationsCount: 41 },
    { title: 'College Diploma', subtitle: 'DUO', cardColor: '#141414', organizationsCount: 41 },
    { title: 'College Diploma', subtitle: 'DUO', cardColor: '#141414', organizationsCount: 41 },
    { title: 'College Diploma', subtitle: 'DUO', cardColor: '#141414', organizationsCount: 41 },
  ]

  const [filteredCredentials, setFilteredCredentials] = useState<any[]>([])

  useEffect(() => {
    const filtered = credentials.filter((c) => {
      c.tags?.forEach((t) => {
        if (t.indexOf(searchInput)) return c
      })
    })
    setFilteredCredentials(filtered)
  }, [searchInput])

  return (
    <div>
      <div
        className="shadow-lg"
        style={{
          width: '100%',
          backgroundColor: '#7392FF',
          display: 'flex',
          justifyContent: 'space-between',
          padding: 20,
          marginBottom: 20,
        }}
      >
        <div style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: 'white' }}></div>
        <div
          style={{
            color: 'white',
            marginTop: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          <h1 className="py-8 text-6xl font-semibold">
            Claim your data <br /> today.
          </h1>
          <h3 className="w-2/3 pt-4 text-base font-medium">
            We have gathered all available information about you, for you! Below you will find all the credentials ready
            for you to claim. New ones are added everyday.
          </h3>
          <br />
          <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        </div>
        <div
          className="shadow-lg cursor-pointer"
          style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: 'white' }}
        >
          {<FiUser className="h-full w-full p-2" />}
        </div>
      </div>
      {searchInput ? (
        <CredentialCardContainer
          title="Search results"
          description="The results of your search"
          credentials={filteredCredentials}
        />
      ) : (
        <>
          <CredentialCardContainer
            title="Your first credential"
            description="These are ready to be claimed by you!"
            credentials={[{ title: 'College Diploma', subtitle: 'DUO', cardColor: '#141414', organizationsCount: 41 }]}
          />
          <CredentialCardContainer
            title="Selected for you"
            description="These are ready to be claimed by you!"
            credentials={credentials}
          />
        </>
      )}

      {/* <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '45%' }}>
          <b style={{ fontSize: 50, width: '100%' }}>Your first credential</b>
          <h1 style={{ fontSize: 18, width: '100%', color: 'grey' }}>These are ready to be claimed by you!</h1>
          <CredentialCard title="Fly Account" subTitle="Fly" cardColor="#0077aa" />
        </div>
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
          <CredentialCard title="U pas" subTitle="Utrecht" cardColor="#ce070d" organizationsCount={83} />
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
        </div>
      </div> */}
    </div>
  )
}
