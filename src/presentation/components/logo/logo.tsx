import React, { memo } from 'react'

type Props = React.HTMLAttributes<HTMLElement>

const SignInHeader = (props: Props) => {
  return (
    <div>
      <img
        className="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        4Dev's Enquete
      </h2>
    </div>
  )
}
export default memo(SignInHeader)
