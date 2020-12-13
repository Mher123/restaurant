import './DeleteCategoryItemModal.scss';
import React from 'react';
import { Modal } from 'antd';
const DeleteCategoryItemModal = (props) => {

  const state = {
    categorys:JSON.parse(localStorage.getItem('categorys'))||[]
  };

  const handleDeleteCategoryItem = () => {
    state.categorys.map((category) => 
      {
        if(category.id===props.selectedCategoryItem.categoryKey){
            category.items.map((item,index) => {
            if(item.id===props.selectedCategoryItem.itemId){
              category.items.splice(index, 1);
            }
          })
        }
      }
    )
    localStorage.setItem('categorys',JSON.stringify(state.categorys));
    props.setIsModalVisibleDeleteCategoryItem(false);
  }
    return (
      <div>
        <Modal
          className="delete_category_item_modal"
          footer={null}
          header={null}
          width={500}
          visible={props.isModalVisibleDeleteCategoryItem}
          onCancel={props.handleCancelDeleteCategoryItem}
        >
          <h3 className="modal_title">Delete Сategory</h3>
          <div className="text">
            <p>Are you sure you want to delete</p>
            <p className="name"> {props.selectedCategoryItem.name} </p> 
            <p>Deleted items cannot be recovered!</p>
          </div>
          <div className="btns">
            <button className="my__btn midle__btn grey__btn " onClick={props.handleCancelDeleteCategoryItem}>
              cancel
            </button>
            <button className="my__btn midle__btn danger__btn" onClick={handleDeleteCategoryItem}>
              Delete
            </button>
          </div>
        </Modal>
      </div>
    );
}

export default DeleteCategoryItemModal;