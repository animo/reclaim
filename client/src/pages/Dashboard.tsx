import type { Organization, OrganizationCredential } from '../slices/types'

import { useEffect, useState } from 'react'
import { FiUser } from 'react-icons/fi'

import { useAppDispatch } from '../hooks/hooks'
import { useOrganizations } from '../slices/organization/connectionSelectors'
import { fetchAllOrganizations } from '../slices/organization/organizationThunks'

import { CredentialCardContainer } from './dashboard/CredentialCardContainer'
import { SearchBar } from './dashboard/SearchBar'

interface Cred {
  org: Organization
  cred: OrganizationCredential
}

export const DashBoard = () => {
  const [filterList, setFilterList] = useState<string[]>([])
  const [searchInput, setSearchInput] = useState('')
  const [credentials, setCredentials] = useState<any[]>([])
  const [filteredCredentials, setFilteredCredentials] = useState<OrganizationCredential[]>([])
  const { organizations } = useOrganizations()

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllOrganizations())
  }, [])

  useEffect(() => {
    const lol: any[] = []
    organizations.forEach((org) => {
      org.availableCredentials.forEach((cred) => {
        const obj = {
          org: org,
          cred: cred,
        }
        lol.push(obj)
      })
    })

    setCredentials(lol)
  }, [organizations])

  useEffect(() => {
    const filtered: any[] = []
    credentials.filter((c) => {
      c.cred.tags?.forEach((t: string) => {
        if (t.includes(searchInput)) filtered.push(c)
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
        <div
          style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: 'white' }}
          className="flex items-center justify-center text-4xl font-semibold"
        >
          <p className="">i</p>
        </div>
        <div
          className="shadow-lg"
          style={{
            color: 'white',
            marginTop: 50,
            display: 'flex',
            justifyContent: 'space-between',
            padding: 20,
            marginBottom: 20,
          }}
        >
          <h1 className="py-8 text-6xl font-semibold">
            Claim jou data <br /> <p className="text-8xl pt-1">vandaag.</p>
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
      <div className="flex flex-row w-1/2 py-2 pb-8 m-auto px-24 justify-between">
        <button
          className={`p-2 px-4 rounded-lg shadow hover:bg-opacity-50 ${
            filterList.length === 0 ? 'bg-black bg-opacity-10 hover:bg-opacity-0' : 'bg-white'
          }`}
          onClick={() => setFilterList([])}
        >
          All
        </button>
        <button
          className={`p-2 px-4 rounded-lg shadow hover:bg-opacity-50 ${
            filterList.includes('rijbewijs') ? 'bg-black bg-opacity-10 hover:bg-opacity-0' : 'bg-white'
          }`}
          onClick={() => setFilterList(['rijbewijs'])}
        >
          Overheid
        </button>
        <button
          className={`p-2 px-4 rounded-lg shadow hover:bg-opacity-50 ${
            filterList.includes('school') ? 'bg-black bg-opacity-10 hover:bg-opacity-0' : 'bg-white'
          }`}
          onClick={() => setFilterList(['school'])}
        >
          School
        </button>
        <button
          className={`p-2 px-4 rounded-lg shadow hover:bg-opacity-50 ${
            filterList.includes('belasting') ? 'bg-black bg-opacity-10 hover:bg-opacity-0' : 'bg-white'
          }`}
          onClick={() => setFilterList(['belasting'])}
        >
          Aangifte
        </button>
        <button
          className={`p-2 px-4 rounded-lg shadow hover:bg-opacity-50 ${
            filterList.includes('huis') ? 'bg-black bg-opacity-10 hover:bg-opacity-0' : 'bg-white'
          }`}
          onClick={() => setFilterList(['huis'])}
        >
          Verhuizen
        </button>
      </div>
      {searchInput ? (
        <CredentialCardContainer
          title="Zoekresultaten"
          description="De resultaten van jou zoekopdracht."
          credentials={filteredCredentials}
        />
      ) : (
        <>
          <CredentialCardContainer
            title="Een vlugge start"
            description="Start met het claimen van jou gegevens."
            credentials={[
              {
                org: {
                  name: 'Identifly',
                  brandColor: '#202223',
                },
                cred: {
                  name: 'Identifly Account',
                  subtitle: 'by Fly',
                  cardColor: '#141414',
                  icon: '/public/animo-logo.png',
                  organizationsCount: 41,
                },
              },
            ]}
          />
          <CredentialCardContainer
            title="Speciaal voor jou"
            description="Deze gegevens zijn klaar om door jou geclaimed te worden!"
            credentials={credentials}
          />
        </>
      )}
    </div>
  )
}
