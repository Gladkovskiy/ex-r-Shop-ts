import {Box, Button, Flex} from '@chakra-ui/react'
import {useFormik} from 'formik'
import {FC, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {inputs} from '../../../../../formik/inputs/createOrder'
import {} from '../../../../../formik/validation/order'
import {useOrdersAdd} from '../../../../../graphQL/hooks/orders/mutation'
import {useBasketAction} from '../../../../../hooks/useAction'
import {useAppSelector} from '../../../../../hooks/useAppSelector'
import {buttonSize} from '../../../../../styles/responsiveStyles'
import AppBoxForm from '../../../../Common/AppBoxForm'
import FormikInput from '../../../../Common/FormikInput'
import OrderTable from './OrderTable'
import Products from './Products'
import {validation} from '../../../../../formik/validation/order'

interface IOrderForm {
  backToBasket: () => void
  closeModal: () => void
}

const OrderForm: FC<IOrderForm> = ({backToBasket, closeModal}) => {
  const {
    user: {login, tel},
  } = useAppSelector(r => r.AuthReducer)
  const {products} = useAppSelector(r => r.localStorageReducers.BasketReducer)
  const {emptyBasket} = useBasketAction()
  const [addOrder, {data, loading}] = useOrdersAdd()
  const [orderTable, setOrderTable] = useState(true)
  const {t, i18n} = useTranslation('mainLayout')
  const {initialValues, validationSchema} = validation(i18n.language)

  const formik = useFormik({
    initialValues: {
      ...initialValues,
      firstname: login.split(' ').length === 3 ? login.split(' ')[0] : '',
      name: login.split(' ').length === 3 ? login.split(' ')[1] : '',
      secondname: login.split(' ').length === 3 ? login.split(' ')[2] : '',
      tel,
    },
    validationSchema,
    onSubmit: values => {
      addOrder({
        variables: {
          order: {
            adress: values.adress,
            fio: `${values.firstname} ${values.name} ${values.secondname}`,
            products: products.map(({name, price, product_id, quantity}) => ({
              name,
              price,
              product_id,
              quantity,
            })),
            tel: values.tel,
          },
        },
      }).then(() => {
        emptyBasket()
        setOrderTable(false)
      })
    },
  })

  return (
    <Box>
      {orderTable ? (
        <form onSubmit={formik.handleSubmit}>
          <AppBoxForm w={{base: '100%', sm: '80%', md: '70%'}} mb={5}>
            {inputs.map(({inputName, label, ...props}) => (
              <FormikInput
                key={inputName}
                error={formik.errors[inputName]}
                touched={formik.touched[inputName]}
                props={formik.getFieldProps(inputName)}
                label={label[i18n.language as keyof typeof label]}
                {...props}
              />
            ))}
          </AppBoxForm>

          <AppBoxForm w={{base: '100%', sm: '80%', md: '70%'}} mb={5}>
            <Products products={products} />
          </AppBoxForm>

          <Flex justifyContent={'space-between'}>
            <Button size={buttonSize} onClick={backToBasket}>
              {t('Order.Back')}
            </Button>

            <Button size={buttonSize} type="submit" isLoading={loading}>
              {t('Order.Confirm the order')}
            </Button>
          </Flex>
        </form>
      ) : (
        <OrderTable
          orderNumber={data?.order.orderNumber!}
          closeModal={closeModal}
        />
      )}
    </Box>
  )
}

export default OrderForm
