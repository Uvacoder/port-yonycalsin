import * as React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import pick from 'just-pick'
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

import { FieldText } from '~/components/field-text'
import { HomeLayout } from '~/layouts'
import cookielib from '~/lib/cookielib'
import { cookieNames } from '~/utils/constants'
import formConstraints from '~/utils/form-constraints'
import validationResolver from '~/utils/validation-resolver'

interface ResumePageProps {
  hasGuestSessionToken: boolean
}

interface FormFields {
  email: string
}

function ResumePage(props: ResumePageProps) {
  const formMethods = useForm<FormFields>({
    resolver: validationResolver,
    context: pick(formConstraints, 'email'),
  })

  const onSubmit = (values: FormFields) => {
    // eslint-disable-next-line no-console
    console.log(values)
  }

  return (
    <HomeLayout>
      <div className="max-w-xl mx-auto mt-3">
        <h1>Ingresa tu email</h1>
      </div>
      <FormProvider {...formMethods}>
        <form className="max-w-xl mx-auto my-5 space-y-2" onSubmit={formMethods.handleSubmit(onSubmit)}>
          <FieldText name="email" type="email" label="Correo electronico" />
          <button className="w-full bg-primary-700 text-white rounded-md py-1">Ver resume</button>
        </form>
      </FormProvider>
    </HomeLayout>
  )
}

export function getServerSideProps(context: GetServerSidePropsContext): GetServerSidePropsResult<ResumePageProps> {
  const cookies = cookielib.parseCookies(context)

  const hasGuestSessionToken = !!cookies[cookieNames.GUEST_SESSION_TOKEN]

  return {
    props: {
      hasGuestSessionToken,
    },
  }
}

export default ResumePage
