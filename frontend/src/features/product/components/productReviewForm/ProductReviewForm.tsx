import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ProductReviewForm.module.css';
import FormRow from '../../../../shared/ui/formRow/FormRow';
import Button from '../../../../shared/ui/button/Button';
import { useModalContext } from '../../../../shared/ui/modal/Modal';
import RatingSelect from '../../../../shared/ui/ratingSelect/RatingSelect';

type Inputs = {
  message: string;
  rate: number;
}

function ProductReviewForm() {
  const { toggleModal } = useModalContext()

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    defaultValues: {}
  })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.rows}>
        <FormRow label='Message' error={errors.message?.message}>
          <textarea placeholder='Write your review here... (max 250 characters)' id='message' rows={10} {...register('message', {
            maxLength: {
              value: 250,
              message: "Your message must have less than 250 characters"
            }
          })}></textarea>
        </FormRow>

        <FormRow label='Rating' error={errors.rate?.message}>
          <RatingSelect />
        </FormRow>
      </div>

      <div className={styles.buttonsWrapper}>
        <Button type="submit" buttonSize='small'>Add Review</Button>
        <Button type='button' buttonSize='small' onClick={() => toggleModal(false)}>Close</Button>
      </div>
    </form>
  )
}

export default ProductReviewForm