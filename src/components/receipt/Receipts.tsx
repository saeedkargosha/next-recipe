import { Recipe } from '@/types'
import { Receipt } from './Receipt'
import { useTranslations } from 'next-intl'

type ReceiptsProps = {
  receipts: Recipe[] | null
}

export function Receipts({ receipts }: ReceiptsProps) {
  const t = useTranslations()

  if (!receipts) {
    return <div className='text-xl font-bold'>{t('No receipts available')}</div>
  }

  return receipts.map(receipt => <Receipt key={receipt.id} receipt={receipt} />)
}
