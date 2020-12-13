import './Category.scss';
import React , { useState }from 'react';
import { Collapse } from 'antd';
import DeleteCategoryModal from '../components/modals/DeleteCategoryModal';
import CreateCategoryModal from '../components/modals/CreateCategoryModal';
import EditCategoryModal from '../components/modals/EditCategoryModal';
import CreatCategoryItemModal from '../components/modals/CreatCategoryItemModal';
import DeleteCategoryItemModal from '../components/modals/DeleteCategoryItemModal';


const Category = () => {
  const { Panel } = Collapse;

  const state = {
    categorys:JSON.parse(localStorage.getItem('categorys'))||[],
    loading: false,
  };
  
  const [isModalVisibleCreateCategory, setIsModalVisibleCreateCategory] = useState(false);

  const showModalCreateCategory = () => {
    setIsModalVisibleCreateCategory(true);
  };

  const handleCancelCreateCategory = () => {
    setIsModalVisibleCreateCategory(false);
  };

  const [isModalVisibleEditCategory, setIsModalVisibleEditCategory] = useState(false);

  const showModalEditCategory = (id,name) => {
    setSelectedCategory({name:name,key:id})
    setIsModalVisibleEditCategory(true);
  };

  const handleCancelEditCategory = () => {
    setSelectedCategory({name:null,key:null})
    setIsModalVisibleEditCategory(false);
  };


  const [isModalVisibleDeleteCategory, setIsModalVisibleDeleteCategory] = useState(false);

  const showModalDeleteCategory = (id,name) => {
    setSelectedCategory({name:name,key:id})
    setIsModalVisibleDeleteCategory(true);
  };

  const handleCancelDeleteCategory = () => {
    setIsModalVisibleDeleteCategory(false);
  };


  const [isModalVisibleAddItem, setIsModalVisibleAddItem] = useState(false);

  const showModalAddItem = () => {
    setIsModalVisibleAddItem(true);
  };

  const handleCancelAddItem = () => {
    setIsModalVisibleAddItem(false);
  };


  const [isModalVisibleDeleteCategoryItem, setIsModalVisibleDeleteCategoryItem] = useState(false);

  const showModalDeleteCategoryItem = (categoryId,itemId,name) => {
    setSelectedCategoryItem({name:name,categoryKey:categoryId,itemId:itemId})
    setIsModalVisibleDeleteCategoryItem(true);
  };

  const handleCancelDeleteCategoryItem = () => {
    setIsModalVisibleDeleteCategoryItem(false);
  };
  

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedCategoryItem, setSelectedCategoryItem] = useState('')

    return (
      <div id="category" className="category">
        <button className="my__btn midle__btn danger__btn" onClick={showModalCreateCategory}>
          Create category
        </button>
        <div className="data">
          {state.categorys.length
            ? 
              <div className="isset__category accordion">
                <Collapse>
                {state.categorys.map((category) => 
                    <Panel header={
                      <div className="header">
                        <div>
                          <span>{category.name}</span>
                        </div>
                        <div className="icons">
                          <span onClick={showModalAddItem}>
                            <div className="info">
                              Create item
                              <span></span>
                            </div>
                            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <line x1="9.5" y1="3" x2="9.5" y2="12.1764" stroke="black"/>
                              <line x1="14" y1="7.5" x2="5" y2="7.5" stroke="black"/>
                              <rect x="2.5" y="0.5" width="14" height="14" rx="1.5" stroke="black"/>
                            </svg>
                          </span>
                          <span onClick={()=>showModalEditCategory(category.id,category.name)}>
                            <div className="info">
                              Edit
                              <span></span>
                            </div>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.44828 2.6958H2.65517C1.74483 2.6958 1 3.44417 1 4.35884V14.3371C1 15.2518 1.74483 16.0001 2.65517 16.0001H12.5862C13.4966 16.0001 14.2414 15.2518 14.2414 14.3371V8.51644" stroke="black" strokeMiterlimit="10" strokeLinejoin="round"/>
                              <path d="M9.4902 9.88957L6.27588 10.803L7.18498 7.57339L13.3864 1.34253C13.8409 0.885822 14.5552 0.885822 14.9773 1.34253L15.6591 2.0276C16.1137 2.48431 16.1137 3.202 15.6591 3.62609L9.4902 9.88957Z" stroke="black" strokeMiterlimit="10" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span>
                            <svg className="dow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <mask id="path-1-inside-1" fill="white">
                              <path d="M9.24992 7.33317L9.24992 9.83317L11.3333 9.83317L7.99992 13.1665L4.66659 9.83317L6.74992 9.83317L6.74992 7.33317"/>
                              </mask>
                              <path d="M9.24992 7.33317L9.24992 9.83317L11.3333 9.83317L7.99992 13.1665L4.66659 9.83317L6.74992 9.83317L6.74992 7.33317" fill="black"/>
                              <path d="M9.24992 9.83317L8.94992 9.83317L8.94992 10.1332L9.24992 10.1332L9.24992 9.83317ZM11.3333 9.83317L11.5454 10.0453L12.0575 9.53317L11.3333 9.53317L11.3333 9.83317ZM7.99992 13.1665L7.78779 13.3786L7.99992 13.5908L8.21205 13.3786L7.99992 13.1665ZM4.66659 9.83317L4.66659 9.53317L3.94232 9.53317L4.45445 10.0453L4.66659 9.83317ZM6.74992 9.83317L6.74992 10.1332L7.04992 10.1332L7.04992 9.83317L6.74992 9.83317ZM8.94992 7.33317L8.94992 9.83317L9.54992 9.83317L9.54992 7.33317L8.94992 7.33317ZM9.24992 10.1332L11.3333 10.1332L11.3333 9.53317L9.24992 9.53317L9.24992 10.1332ZM11.1211 9.62104L7.78779 12.9544L8.21205 13.3786L11.5454 10.0453L11.1211 9.62104ZM8.21205 12.9544L4.87872 9.62104L4.45445 10.0453L7.78779 13.3786L8.21205 12.9544ZM4.66659 10.1332L6.74992 10.1332L6.74992 9.53317L4.66659 9.53317L4.66659 10.1332ZM7.04992 9.83317L7.04992 7.33317L6.44992 7.33317L6.44992 9.83317L7.04992 9.83317Z" fill="white" mask="url(#path-1-inside-1)"/>
                              <path d="M13.15 13.8333V6.48333H14.5167V15.35H1.48333V6.48333H2.85V13.8333V13.9833H3H13H13.15V13.8333ZM2.16667 2.01667H2.01667V2.16667V3.83333V3.98333H2.16667H13.8333H13.9833V3.83333V2.16667V2.01667H13.8333H2.16667ZM0.65 0.65H15.35V5.35H0.65V0.65Z" fill="black" stroke="white" strokeWidth="0.3"/>
                            </svg>
                          </span>
                          <span onClick={()=>showModalDeleteCategory(category.id,category.name)}>
                          <div className="info">
                              Delete
                              <span></span>
                            </div>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.7777 3.22229V14.3334C13.7777 15.3112 12.9777 16.1112 11.9999 16.1112H3.99995C3.02217 16.1112 2.22217 15.3112 2.22217 14.3334V3.22229" stroke="black" strokeMiterlimit="10" strokeLinejoin="round"/>
                              <path d="M0 3.22229H16" stroke="black" strokeMiterlimit="10" strokeLinejoin="round"/>
                              <path d="M10.6668 3.22222H5.3335V1.88889C5.3335 1.4 5.7335 1 6.22238 1H9.77794C10.2668 1 10.6668 1.4 10.6668 1.88889V3.22222Z" stroke="black" strokeMiterlimit="10" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                  } key={category.id}>
                    {
                      category.items.length?
                        category.items.map((item) => 
                          <div key={item.id} className="items">
                            <div>
                              <h4>
                                {item.name}
                              </h4>
                            </div>
                            <div className="icons">
                              <span>
                                <div className="info">
                                    Edit
                                  <span></span>
                                </div>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8.44828 2.6958H2.65517C1.74483 2.6958 1 3.44417 1 4.35884V14.3371C1 15.2518 1.74483 16.0001 2.65517 16.0001H12.5862C13.4966 16.0001 14.2414 15.2518 14.2414 14.3371V8.51644" stroke="black" strokeMiterlimit="10" strokeLinejoin="round"/>
                                  <path d="M9.4902 9.88957L6.27588 10.803L7.18498 7.57339L13.3864 1.34253C13.8409 0.885822 14.5552 0.885822 14.9773 1.34253L15.6591 2.0276C16.1137 2.48431 16.1137 3.202 15.6591 3.62609L9.4902 9.88957Z" stroke="black" strokeMiterlimit="10" strokeLinejoin="round"/>
                                </svg>
                              </span>
                              <span onClick={()=>showModalDeleteCategoryItem(category.id,item.id,item.name)}>
                                <div className="info">
                                    Delete
                                  <span></span>
                                </div>
                                <span>
                                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7777 3.22229V14.3334C13.7777 15.3112 12.9777 16.1112 11.9999 16.1112H3.99995C3.02217 16.1112 2.22217 15.3112 2.22217 14.3334V3.22229" stroke="black" strokeMiterlimit="10" strokeLinejoin="round"/>
                                    <path d="M0 3.22229H16" stroke="black" strokeMiterlimit="10" strokeLinejoin="round"/>
                                    <path d="M10.6668 3.22222H5.3335V1.88889C5.3335 1.4 5.7335 1 6.22238 1H9.77794C10.2668 1 10.6668 1.4 10.6668 1.88889V3.22222Z" stroke="black" strokeMiterlimit="10" strokeLinejoin="round"/>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </div>
                        )
                      :
                      <div className="no_item">
                        No Item
                      </div>
                    }
                 </Panel>
                )}
              </Collapse> 

              </div>
            : 
              <div className="no__category">
                <span>
                  <img src="./assets/images/search.png" alt="search"/>
                  <p>No Categories were found</p>
                </span>
              </div>
          }
        </div>

        <CreateCategoryModal isModalVisibleCreateCategory={isModalVisibleCreateCategory} handleCancelCreateCategory={handleCancelCreateCategory} setIsModalVisibleCreateCategory={setIsModalVisibleCreateCategory}/>
        <EditCategoryModal key={selectedCategory.key} handleCancelEditCategory={handleCancelEditCategory} isModalVisibleEditCategory={isModalVisibleEditCategory} selectedCategory={selectedCategory} setIsModalVisibleEditCategory={setIsModalVisibleEditCategory}/>
        <DeleteCategoryModal selectedCategory={selectedCategory} isModalVisibleDeleteCategory={isModalVisibleDeleteCategory} handleCancelDeleteCategory={handleCancelDeleteCategory} setIsModalVisibleDeleteCategory={setIsModalVisibleDeleteCategory}/>
        <CreatCategoryItemModal isModalVisibleAddItem={isModalVisibleAddItem} handleCancelAddItem={handleCancelAddItem} setIsModalVisibleAddItem={setIsModalVisibleAddItem}/>
        <DeleteCategoryItemModal key={selectedCategoryItem.itemKey} selectedCategoryItem={selectedCategoryItem} isModalVisibleDeleteCategoryItem={isModalVisibleDeleteCategoryItem} handleCancelDeleteCategoryItem={handleCancelDeleteCategoryItem} setIsModalVisibleDeleteCategoryItem={setIsModalVisibleDeleteCategoryItem}/>
      </div>
    );
  
}

export default Category;