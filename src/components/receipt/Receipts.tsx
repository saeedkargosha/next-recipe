import { Recipe } from '@/types'
import { Receipt } from './Receipt'

type ReceiptsProps = {
  receipts: Recipe[] | null
}

export function Receipts({ receipts }: ReceiptsProps) {
  if (!receipts) {
    return <div className='text-xl font-bold'>{'No receipts available'}</div>
  }

  return receipts.map(receipt => <Receipt key={receipt.id} receipt={receipt} />)
}
