import {AddIcon, DeleteIcon, RepeatIcon} from '@chakra-ui/icons'
import CreateAttribute from '../components/Administration/ProductAttributes/createAttribute/CreateAttribute'
import DeleteAttribute from '../components/Administration/ProductAttributes/deleteAttribute/DeleteAttribute'
import ProductAttributes from '../components/Administration/ProductAttributes/ProductAttributes'
import CreateCategory from '../components/Administration/ProductCategories/CreateCategory'
import DeleteCategory from '../components/Administration/ProductCategories/DeleteCategory/DeleteCategory'
import ProductCategories from '../components/Administration/ProductCategories/ProductCategories'
import CreateGroup from '../components/Administration/ProductGroups/CreateGroup'
import DeleteGroup from '../components/Administration/ProductGroups/DeleteGroup'
import ProductGroups from '../components/Administration/ProductGroups/ProductGroups'
import CreateProduct from '../components/Administration/Products/Create/CreateProduct'
import DeleteProduct from '../components/Administration/Products/Delete/DeleteProduct'
import Products from '../components/Administration/Products/Products'
import CreateUser from '../components/Administration/Registration/CreateUser/CreateUser'
import DeleteUser from '../components/Administration/Registration/DeleteUser/DeleteUser'
import Registration from '../components/Administration/Registration/Registration'
import {ITabs} from '../components/Common/AppTabs'

export const adminTabs: ITabs[] = [
  {
    title: {
      ru: 'Пользователи',
      en: 'Users',
    },
    component: <Registration />,
  },
  {
    title: {
      ru: 'Категория товара',
      en: 'Category of goods',
    },
    component: <ProductCategories />,
  },
  {
    title: {
      ru: 'Группа товара',
      en: 'Group of goods',
    },
    component: <ProductGroups />,
  },
  {
    title: {
      ru: 'Атрибуты товара',
      en: 'Product attributes',
    },
    component: <ProductAttributes />,
  },
  {
    title: {
      ru: 'Товар',
      en: 'Goods',
    },
    component: <Products />,
  },
]

export const regTabs: ITabs[] = [
  {
    title: {
      ru: 'Добавить',
      en: 'Add',
    },
    icon: <AddIcon />,
    component: <CreateUser />,
  },
  {
    title: {
      ru: 'Удалить',
      en: 'Delete',
    },
    icon: <DeleteIcon />,
    component: <DeleteUser />,
  },
]

export const categoryTabs: ITabs[] = [
  {
    title: {
      ru: 'Добавить',
      en: 'Add',
    },
    icon: <AddIcon />,
    component: <CreateCategory />,
  },
  {
    title: {
      ru: 'Удалить',
      en: 'Delete',
    },
    icon: <DeleteIcon />,
    component: <DeleteCategory />,
  },
]

export const groupTabs: ITabs[] = [
  {
    title: {
      ru: 'Добавить',
      en: 'Add',
    },
    icon: <AddIcon />,
    component: <CreateGroup />,
  },
  {
    title: {
      ru: 'Удалить',
      en: 'Delete',
    },
    icon: <DeleteIcon />,
    component: <DeleteGroup />,
  },
]

export const attributeTabs: ITabs[] = [
  {
    title: {ru: 'Добавить', en: 'Add'},
    icon: <AddIcon />,
    component: <CreateAttribute />,
  },

  {
    title: {ru: 'Обновить/Удалить', en: 'Update/Delete'},
    icon: (
      <>
        <RepeatIcon />
        <DeleteIcon />
      </>
    ),
    component: <DeleteAttribute />,
  },
]

export const productTabs: ITabs[] = [
  {
    title: {
      ru: 'Добавить',
      en: 'Add',
    },
    icon: <AddIcon />,
    component: <CreateProduct />,
  },

  {
    title: {ru: 'Обновть/Удалить', en: 'Reveal/Delete'},
    icon: (
      <>
        <RepeatIcon />
        <DeleteIcon />
      </>
    ),
    component: <DeleteProduct />,
  },
]
