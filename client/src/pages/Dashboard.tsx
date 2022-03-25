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
  const [searchInput, setSearchInput] = useState('')
  const [credentials, setCredentials] = useState<OrganizationCredential[]>([])
  const [filteredCredentials, setFilteredCredentials] = useState<OrganizationCredential[]>([])
  const { organizations } = useOrganizations()

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllOrganizations())
  }, [])

  useEffect(() => {
    // you need the organisation
    // you need the credential
    // make obj {org: org, credential:cred}

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

    // const creds = organizations.flatMap((x) => x.availableCredentials) as Cred[]
    setCredentials(lol)
  }, [organizations])

  useEffect(() => {
    const filtered = credentials.filter((c) => {
      c.tags?.forEach((t: string) => {
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
    </div>
  )
}
