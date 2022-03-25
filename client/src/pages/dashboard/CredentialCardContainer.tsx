import { CredentialCard } from '../../components/CredentialCard'

interface CredentialCardContainerProps {
  title: string
  description: string
  credentials: any[]
}

export const CredentialCardContainer = ({ title, description, credentials }: CredentialCardContainerProps) => {
  // eslint-disable-next-line no-console
  return (
    <div className="flex flex-col w-3/4 m-auto px-16">
      <h1 className="text-4xl font-bold text-t-primary">{title}</h1>
      <p className="text-lg text-t-secondary font-medium">{description}</p>
      <div className="grid grid-cols-3">
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
              />
            )
          }
        })}
      </div>
    </div>
  )
}
