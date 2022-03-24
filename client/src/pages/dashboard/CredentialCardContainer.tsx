import { CredentialCard } from '../../components/CredentialCard'

interface CredentialCardContainerProps {
  title: string
  description: string
  credentials: any[]
}

export const CredentialCardContainer = ({ title, description, credentials }: CredentialCardContainerProps) => {
  return (
    <div className="flex flex-col w-3/4 m-auto px-16">
      <h1 className="text-4xl font-bold text-t-primary">{title}</h1>
      <p className="text-lg text-t-secondary font-medium">{description}</p>
      <div className="grid grid-cols-3">
        {credentials.map((cred) => {
          return (
            <CredentialCard
              title={cred.title}
              subTitle={cred.subtitle}
              cardColor={cred.cardColor}
              organizationsCount={cred.organizationsCount}
            />
          )
        })}
      </div>
    </div>
  )
}
