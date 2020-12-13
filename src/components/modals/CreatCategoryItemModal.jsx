import './CreatCategoryItemModal.scss';
import React , { useState }from 'react';
import { Modal , Switch , Checkbox , Upload , Select , message  } from 'antd';

const CreatCategoryItemModal = (props) => {
  const { Option } = Select;

  const state = {
    categorys:JSON.parse(localStorage.getItem('categorys'))||[],
    loading: false,
  };

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  const [imageUrl, setImageUrl] = useState('');
  const handlImageUrl = (img) => {
    setImageUrl(img);
  };

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      state.loading = true;
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl =>
        {
          handlImageUrl(imageUrl)
          state.loading= false;
        }   
      );
      
    }
  };



  const [itemActive, setItemActive] = useState('')
  const onChangeItemActive = (checked) => {
    setItemActive(checked)
  }

  const [itemName, setItemName] = useState('')
  const handleChangeItemName = (event) => {
    setItemName(event.target.value)
  }

  const [itemPrice, setItemPrice] = useState('')
  const handleChangeItemPrice = (event) => {
    setItemPrice(event.target.value)
  }

  const [itemTimeMin, setItemTimeMinCheckbox] = useState('')
  function onChangeItemTimeMin(e) {
    setItemTimeMinCheckbox(e.target.value)
  }

  const [timeMinCheckbox, setItemTimeMin] = useState('')
  function onChangeTimeMinCheckbox(e) {
    setItemTimeMin(e.target.checked)
  }


  const [itemWeightG, setItemWeightG] = useState('')
  function onChangeItemWeightG(e) {
    setItemWeightG(e.target.value)
  }

  const [weightGCheckbox, setWeightGCheckbox] = useState('')
  function onChangeWeightGCheckbox(e) {
    setWeightGCheckbox(e.target.checked)
  }
  
  const [selectedCategory, setSelectedCategory] = useState('')
  function handleSelectedCategory(value) {
    setSelectedCategory(value);
  }

  const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
  
  const [checkedADD, setCheckedADD] = useState([0])
  function tagChangeRender(value) {
    value.length?setCheckedADD(value):setCheckedADD([0]);
  }

  const tagRender = () => {
    return (
      <span> Select ({checkedADD.length-1})</span>
    );
  }

  const [itemDescription, setItemDescription] = useState("")
  function handleChangeItemDescription(e) {
    setItemDescription(e.target.value);
  }

  const handleCreatItem =() => {
    let item = {
      id:itemName+Math.floor(100000 + Math.random() * 100000),
      img:imageUrl,
      active:itemActive,
      name:itemName,
      price:itemPrice,
      timeMin:itemTimeMin,
      timeMinCheckbox:timeMinCheckbox,
      weightG:itemWeightG,
      weightGCheckbox:weightGCheckbox,
      category:selectedCategory,
      add_ons:checkedADD.shift(),
      description:itemDescription
    }
    
    state.categorys.map((category) => 
      {
        if(category.id===selectedCategory.key){
          category.items.push(item);
        }
      }
    )
    localStorage.setItem('categorys',JSON.stringify(state.categorys));
    props.setIsModalVisibleAddItem(false);
  }



  const uploadButton = (
    <div>
      <img src="./assets/images/img.png" alt="img"/>
    </div>
  );
    return (
      <Modal
        className="add_item_modal"
        footer={null}
        header={null}
        width={887}
        visible={props.isModalVisibleAddItem}
        onCancel={props.handleCancelAddItem}
      >
        <div className="modal_title">
          <h3>Create Item</h3>
          <div>
            <span>Active</span>
            <Switch defaultChecked checked={itemActive} onChange={onChangeItemActive}/>
          </div>
        </div>
        <Upload
          name="avatar"
          listType="picture-card"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
        <div className="form">
          <div className ="cols">
            <label className="inp">
              <p>NAME</p>
              <input type="text" placeholder="Enter name" value={itemName} onChange={handleChangeItemName}/>
            </label>
            <label className="inp">
              <p>Price</p>
              <input type="text" placeholder="Enter name" value={itemPrice} onChange={handleChangeItemPrice}/>
            </label>
            <div className="checkbox__inp">
              <div><Checkbox onChange={onChangeTimeMinCheckbox}></Checkbox></div>
              <label className="inp">
                <p>Waiting time, min</p>
                <input type="text" placeholder="Enter name" value={itemTimeMin} onChange={onChangeItemTimeMin}/>
              </label>
            </div>
            <div className="checkbox__inp">
              <div><Checkbox  onChange={onChangeWeightGCheckbox}></Checkbox></div>
              <label className="inp">
                <p>WEIGHT, g</p>
                <input type="text" placeholder="Enter name" value={itemWeightG} onChange={onChangeItemWeightG}/>
              </label>
            </div>
          </div>
          <div className ="cols">
            <label className="inp">
              <p>Category</p>
              <Select
                labelInValue
                defaultValue={{ value: 'lucy' }}
                onChange={handleSelectedCategory}
              >
                {state.categorys.map((category) => 
                  <Option key={category.id} value={category.id}>{category.name}</Option>
                )}
              </Select>
            </label>
            <label className="inp add_ons">
              <p>Apply Add-ons</p>
              <Select
                mode="multiple"
                showArrow
                onChange={tagChangeRender}
                tagRender={tagRender}
                defaultValue={0}
                style={{ width: '100%' }}
                options={options}
              />,
            </label>
            <label className="inp">
              <p>Description</p>
              <textarea type="text" placeholder="Enter text" value={itemDescription} onChange={handleChangeItemDescription}/>
            </label>
            <span className="text_arr_inf">
              Maximum 200 characters
            </span>
          </div>
        </div>
        <div className="btns">
          <button className="my__btn midle__btn grey__btn " onClick={props.handleCancelCreateCategory}>
            cancel
          </button>
          <button className="my__btn midle__btn danger__btn" onClick={handleCreatItem}>
            SAVE
          </button>
        </div>
      </Modal>
    );
  
}

export default CreatCategoryItemModal;