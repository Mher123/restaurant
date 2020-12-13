import './DeleteCategoryModal.scss';
import React from 'react';
import { Modal } from 'antd';
const DeleteCategoryModal = (props) => {

  const state = {
    categorys:JSON.parse(localStorage.getItem('categorys'))||[]
  };

  const handleDeleteCategory = () => {
    state.categorys.map((category,index) => 
      {
        if(category.id===props.selectedCategory.key){
          state.categorys.splice(index, 1);
        }
      }
    )
    localStorage.setItem('categorys',JSON.stringify(state.categorys));
    props.setIsModalVisibleDeleteCategory(false);
  }



    return (
      <div>
        <Modal
          className="delete_category_modal"
          footer={null}
          header={null}
          width={500}
          visible={props.isModalVisibleDeleteCategory}
          onCancel={props.handleCancelDeleteCategory}
        >
          <h3 className="modal_title">Delete Сategory</h3>
          <p>Are you sure you want to delete <span> {props.selectedCategory.name} </span> and all category items?</p>
          <p>Deleted data cannot be recovered!</p>
          <div className="btns">
            <button className="my__btn midle__btn grey__btn " onClick={props.handleCancelDeleteCategory}>
              cancel
            </button>
            <button className="my__btn midle__btn danger__btn" onClick={handleDeleteCategory}>
              Delete
            </button>
          </div>
        </Modal>
      </div>
    );
}

export default DeleteCategoryModal;