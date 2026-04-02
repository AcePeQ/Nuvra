import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ProductReviewForm.module.css';
import FormRow from '../../../../shared/ui/formRow/FormRow';

type Inputs = {
  message: string;
  rate: number;
}

function ProductReviewForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues: {}
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormRow label='Message' error={errors.message?.message}>
        <textarea id='message'></textarea>
      </FormRow>

      <FormRow label='Rating' error={errors.rate?.message}>
        <input />
      </FormRow>
    </form>
  )
}

export default ProductReviewForm