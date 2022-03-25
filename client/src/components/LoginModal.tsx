import React, { useEffect, useState } from 'react'
import { FiCheckCircle, FiLogIn, FiUserPlus } from 'react-icons/fi'
import { useDispatch } from 'react-redux'

import { useConnection } from '../slices/connection/connectionSelectors'
import { useIsSignedIn } from '../slices/user/userSelectors'
import { registerCreateConnection, registerIssueCredential, signIn } from '../slices/user/userThunks'
import { prependApiUrl } from '../utils/Url'

import { CredentialCard } from './CredentialCard'
import { Modal } from './Modal'
import { QRCode } from './QRCode'

type Action = 'login' | 'signup'

interface LoginModalProps {
  setShowModal: (_: boolean) => void
}

interface CardProps {
  title: string
  description: string
  onClick: () => void
  selected: boolean
}

interface CardHolderProps {
  setFlow: (arg0: Action) => void
  flow: Action
}

const Card: React.FC<CardProps> = ({ description, title, selected, onClick, children }) => (
  <button onClick={onClick}>
    <div
      style={{
        width: 175,
        height: 150,
        margin: 20,
        borderRadius: 10,
        padding: 15,
        borderWidth: 2,
        borderColor: selected ? '#7392FF' : 'white',
        textAlign: 'left',
      }}
      className="shadow-lg"
    >
      <div style={{ width: 40 }}>{children}</div>
      <div style={{ padding: 5 }} />
      <h3 style={{ fontSize: 18 }}>{title}</h3>
      <p style={{ color: '#898989', fontSize: 12 }}>{description}</p>
    </div>
  </button>
)

const First: React.FC<CardHolderProps> = ({ flow, setFlow }) => {
  return (
    <>
      <Card
        title="Sign Up"
        description="Download your wallet and setup an account."
        onClick={() => setFlow('signup')}
        selected={flow === 'signup'}
      >
        <FiUserPlus />
      </Card>
      <Card
        title="Sign In"
        description="Use your existing account to login."
        onClick={() => setFlow('login')}
        selected={flow === 'login'}
      >
        <FiLogIn />
      </Card>
    </>
  )
}

const Wallet = () => {
  const [wallet, setWallet] = useState('lissi')
  return (
    <>
      <Card
        title="Lissi Wallet"
        description="by Main Incubator GmbH"
        onClick={() => setWallet('lissi')}
        selected={wallet === 'lissi'}
      >
        <img style={{ borderRadius: 8 }} src={prependApiUrl('/public/wallets/icon-lissi.jpeg')} />
      </Card>
      <Card
        title="Trinsic Wallet"
        description="by Trinsic"
        onClick={() => setWallet('trinsic')}
        selected={wallet === 'trinsic'}
      >
        <img style={{ borderRadius: 8 }} src={prependApiUrl('/public/wallets/icon-trinsic.jpeg')} />
      </Card>
    </>
  )
}

const UserName: React.FC<{ setUserName: (_: string) => void; userName: string }> = ({ userName, setUserName }) => {
  return (
    <div className="flex items-center pr-4 pl-4">
      <p>Naam: &nbsp;&nbsp;</p>
      <input
        className="pl-4 text-t-primary text-lg border-color border-2 border-gray-300 bg-white h-12 px-4 pr-32 rounded-lg text-sm focus:outline-none"
        name="Digicampus"
        placeholder="Digicampus"
        value={userName}
        onChange={({ target: { value } }) => setUserName(value)}
      />
    </div>
  )
}

const QR: React.FC<{ userName: string; setActiveSlide: (_: number) => void; activeSlide: number }> = ({
  userName,
  setActiveSlide,
  activeSlide,
}) => {
  const { invitationUrl, state } = useConnection()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(registerCreateConnection(userName))
  }, [])

  useEffect(() => {
    if (state === 'responded' || state === 'complete') {
      setActiveSlide(activeSlide + 1)
    }
  }, [state])

  if (invitationUrl && state !== 'active') {
    return <QRCode invitationUrl={invitationUrl} connectionState={state} />
  } else {
    return <div className="m-auto shadow-lg rounded-lg" />
  }
}

const Account: React.FC<{ userName: string }> = ({ userName }) => {
  const { id } = useConnection()
  if (!id) return <div />

  const dispatch = useDispatch()
  const onClaimCredential = () => {
    dispatch(registerIssueCredential({ connectionId: id, userName }))
  }

  return (
    <CredentialCard
      title="Reclaim Account"
      subTitle="Reclaim"
      cardColor="#202223"
      imagePath="/public/reclaim-logo.png"
      onClaim={onClaimCredential}
    />
  )
}

const Done = () => {
  return (
    <div
      className="bg-main-background"
      style={{
        borderRadius: 10,
        width: '60%',
        padding: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <FiCheckCircle size={50} style={{ margin: 30 }} />
      <p style={{ textAlign: 'center', marginTop: 30 }}>
        Gefeliciteerd, je kunt starten met het claimen van je gegevens!
      </p>
    </div>
  )
}

export const LoginModal: React.FC<LoginModalProps> = ({ setShowModal }) => {
  const isSignedIn = useIsSignedIn()
  const [userName, setUserName] = useState('')
  const [flow, setFlow] = useState<Action>('signup')
  const [activeSlide, setActiveSlide] = useState(0)
  const [title, setTitle] = useState('Choose your login')
  const [description, setDescription] = useState(
    'Hey there, Gamer! Great first step into claiming your own data. Please choose one of the options below.'
  )

  useEffect(() => {
    if (activeSlide === 0) {
      setTitle('Choose your login')
      setDescription(
        'Hey there, Gamer! Great first step into claiming your own data. Please choose one of the options below.'
      )
    } else if (activeSlide === 1) {
      setTitle('Choose a wallet that you like.')
      setDescription(
        'Hey there, Gamer! Great first step into claiming your own data. Please choose one of the options below.'
      )
    } else if (activeSlide === 2) {
      setTitle('Great, let’s setup your connection.')
      setDescription(
        'Hey there, Gamer! Great first step into claiming your own data. Please choose one of the options below.'
      )
    } else if (activeSlide === 3) {
      setTitle('Claim your first card')
      setDescription(
        'Hey there, Gamer! Great first step into claiming your own data. Please choose one of the options below.'
      )
    } else if (activeSlide === 4) {
      setTitle('Accept your first card')
      setDescription(
        'Hey there, Gamer! Great first step into claiming your own data. Please choose one of the options below.'
      )
    } else if (activeSlide === 5) {
      setTitle('Accept your first card')
      setDescription(
        'Hey there, Gamer! Great first step into claiming your own data. Please choose one of the options below.'
      )
    } else {
      setShowModal(false)
    }
  }, [activeSlide])

  return (
    <Modal
      title={title}
      onOk={() => setActiveSlide(activeSlide + 1)}
      onCancel={() => setShowModal(false)}
      ok="NEXT"
      description={description}
      disabledOk={activeSlide === 3 || (activeSlide === 4 && !isSignedIn)}
    >
      <div className="bg-main-background" style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
        {activeSlide === 0 && <First setFlow={setFlow} flow={flow} />}
        {activeSlide === 1 && <Wallet />}
        {activeSlide === 2 && <UserName setUserName={setUserName} userName={userName} />}
        {activeSlide === 3 && <QR userName={userName} setActiveSlide={setActiveSlide} activeSlide={activeSlide} />}
        {activeSlide === 4 && <Account userName={userName} />}
        {activeSlide === 5 && <Done />}
      </div>
    </Modal>
  )
}
//<First />
