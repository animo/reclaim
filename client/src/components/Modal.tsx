import { AnimatePresence, motion } from 'framer-motion'

import { dropIn, standardFade } from '../FramerAnimations'

import { SmallButton } from './SmallButton'
import { SmallButtonText } from './SmallButtonText'

export interface Props {
  onOk(): void
  ok?: string
  onCancel?(): void
  title: string
  description?: string
  disabledOk?: boolean
}

export const Modal: React.FC<Props> = ({
  onOk,
  onCancel,
  title,
  children,
  ok = 'ok',
  description,
  disabledOk = false,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={standardFade}
        initial="hidden"
        animate="show"
        exit="exit"
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-animo-black bg-opacity-50 transition-opacity"
            aria-hidden="true"
            onClick={onCancel}
          />
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true" />
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="show"
            exit="exit"
            className="bg-main-background dark:bg-animo-black inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition transition-all duration-300 sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full dark:text-white"
          >
            <div className=" px-4 pt-2 mt-4 sm:pb-4">
              <div className="mt-3 sm:mt-0 sm:ml-4 text-left">
                <h2 className="text-2xl py-2 pb-4 font-medium">{title}</h2>
                <h3 className="text-base font-base pb-4" style={{ color: '#898989' }}>
                  {description}
                </h3>
                <div className="mt-2">{children}</div>
              </div>
            </div>
            <div className="p-4 pb-4 sm:px-6 flex flex-row-reverse">
              <SmallButton onClick={onOk} text={ok} disabled={disabledOk} />
              {onCancel && <SmallButtonText onClick={onCancel} text={'CANCEL'} disabled={false} />}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
