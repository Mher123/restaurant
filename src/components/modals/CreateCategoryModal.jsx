import './CreateCategoryModal.scss';
import React , { useState }from 'react';
import { Modal } from 'antd';

const CreateCategoryModal = (props) => {
  const state = {
    categorys:JSON.parse(localStorage.getItem('categorys'))||[]
  };

  const handleAddCategory = () => {
    let item = {
      id:categoryName+Math.floor(100000 + Math.random() * 100000),
      name:categoryName,
      items:[]
    }
    state.categorys.push(item)
    localStorage.setItem('categorys',JSON.stringify(state.categorys));
    setCategoryName('')
    props.setIsModalVisibleCreateCategory(false);
  }

  const [categoryName, setCategoryName] = useState('')
  const handleChangeCategoryName = (event) => {
    setCategoryName(event.target.value)
  }

    return (
      <Modal
        className="create_category_modal"
        footer={null}
        header={null}
        width={500}
        visible={props.isModalVisibleCreateCategory}
        onCancel={props.handleCancelCreateCategory}
      >
        <h3 className="modal_title">Create Category</h3>
        <label className="inp">
          <p>category NAME</p>
          <input type="text" required placeholder="Enter name" value={categoryName} onChange={handleChangeCategoryName}/>
        </label>
        <div className="btns">
          <button className="my__btn midle__btn danger__btn" onClick={handleAddCategory}>
            Create
          </button>
        </div>
      </Modal>
    );
  
}

export default CreateCategoryModal;