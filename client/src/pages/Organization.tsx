import type { Organization as IOrganization } from '../slices/organization/organizationSlice'

import { useEffect, useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'

import { CredentialCard } from '../components/CredentialCard'
import { useAppDispatch } from '../hooks/hooks'
import { useConnectQuery } from '../hooks/useConnectQuery'
import { DIGID_URL } from '../organizations'
import { claimCredential } from '../slices/credentials/credentialsThunks'
import { useOrganizations } from '../slices/organization/connectionSelectors'
import { fetchAllOrganizations } from '../slices/organization/organizationThunks'
import { useUser } from '../slices/user/userSelectors'
import { addOrganization } from '../slices/user/userSlice'
import { prependApiUrl } from '../utils/Url'

export const Organization = () => {
  const dispatch = useAppDispatch()
  const { name } = useParams()
  const { organizations } = useOrganizations()
  const { user } = useUser()
  const navigate = useNavigate()

  const [organization, setOrganization] = useState<IOrganization | undefined>()
  const [credentials, setCredentials] = useState<any[]>([])
  const connect = useConnectQuery()

  useEffect(() => {
    if (connect && connect === 'digid') {
      dispatch(addOrganization('dienst-uitvoerend-onderwijs'))
    } else if (connect) {
      dispatch(addOrganization(connect))
    }
  }, [])

  const onAddOrganization = () => {
    if (organization?.slug) {
      if (organization.slug === 'dienst-uitvoerend-onderwijs') {
        window.location.href = DIGID_URL
      } else {
        dispatch(addOrganization(organization?.slug))
      }
    }
  }

  useEffect(() => {
    const lol: any[] = []

    if (organization) {
      organization.availableCredentials.forEach((cred) => {
        const obj = {
          org: organization,
          cred: cred,
        }
        lol.push(obj)
      })

      setCredentials(lol)
    }
  }, [organization])

  useEffect(() => {
    dispatch(fetchAllOrganizations())
  }, [])

  useEffect(() => {
    const org = organizations.find((x) => {
      return x.slug === name
    })
    setOrganization(org)
  }, [organizations])

  return (
    <div className="bg-main-background">
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
          className="flex items-center justify-center text-4xl font-semibold cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img src={prependApiUrl('/public/reclaim-logo.png')} style={{ borderRadius: 8 }} />
        </div>
        <div
          className="shadow-lg cursor-pointer"
          style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: 'white' }}
        >
          {<FiUser className="h-full w-full p-2" />}
        </div>
      </div>
      <div className="w-3/4 h-screen m-auto flex py-12 px-24">
        {organization ? (
          <div>
            <div className="bg-white p-4 py-6 mb-12 rounded-lg flex justify-between shadow">
              <h1 className="text-4xl font-medium">{organization.name}</h1>
              {user && !user.connectedServices.includes(organization.slug) ? (
                <button
                  className={`px-4 py-2 bg-color rounded-lg text-white font-medium hover:bg-opacity-80`}
                  onClick={onAddOrganization}
                >
                  Connect
                </button>
              ) : (
                <div />
              )}
            </div>
            <div className="grid grid-cols-3 gap-12">
              {credentials.map((cred, idx) => {
                if (cred.org) {
                  return (
                    <CredentialCard
                      key={idx}
                      title={cred.cred.name}
                      subTitle={cred.org.name}
                      imagePath={cred.cred.icon}
                      cardColor={cred.org.brandColor}
                      organizationsCount={cred.cred.organizationsCount}
                      onClaim={() => {
                        dispatch(claimCredential(cred.cred.id))
                      }}
                    />
                  )
                }
              })}
            </div>
          </div>
        ) : (
          <div>You are not logged in.</div>
        )}
      </div>
    </div>
  )
}
