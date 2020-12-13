import './EditCategoryModal.scss';
import React , { useState }from 'react';
import { Modal } from 'antd';

const EditCategoryModal = (props) => {
  const state = {
    categorys:JSON.parse(localStorage.getItem('categorys'))||[]
  };
  const [categoryName, setCategoryName] = useState(props.selectedCategory.name)
  const handleChangeCategoryName = (event) => {
    setCategoryName(event.target.value)
  }

  const handleEditCategory = () => {
    state.categorys.map((category) => 
      {
        if(category.id===props.selectedCategory.key){
          category.name = categoryName;
        }
      }
    )
    localStorage.setItem('categorys',JSON.stringify(state.categorys));
    props.setIsModalVisibleEditCategory(false);
  }

    return (
      <Modal
        className="edit_category_modal"
        footer={null}
        header={null}
        width={500}
        visible={props.isModalVisibleEditCategory}
        onCancel={props.handleCancelEditCategory}
      >
        <h3 className="modal_title">Edit Category</h3>
        <label className="inp">
          <p>category NAME</p>
          <input type="text" required placeholder="Enter name" value={categoryName} onChange={handleChangeCategoryName}/>
        </label>
        <div className="btns">
          <button className="my__btn midle__btn grey__btn " onClick={props.handleCancelEditCategory}>
            cancel
          </button>
          <button className="my__btn midle__btn danger__btn" onClick={handleEditCategory}>
            SAVE
          </button>
        </div>
      </Modal>
    );
  
}

export default EditCategoryModal;