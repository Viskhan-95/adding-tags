import React, { useState } from 'react';
import './styles.css';

const Form = () => {
    const [text, setText] = useState("");
    const [textDirty, setTextDirty] = useState(false);
    const [textInfo, setTextInfo] = useState("Поле ввода не должно быть пустым");
    const [isStyle, setIsStyle] = useState('isError');
    const [isInputStyle, setIsInputStyle] = useState('text');

    const [addTag, setAddTag] = useState([]);


    const setTextHandler = (e) => {

        setText(e.target.value);
        focusHandler();
    }

    const blurHandler = (e) => {
        if (e.target.value.length === 0) {
            setTextDirty(true);
            setIsStyle('isError');
            setTextInfo("Поле ввода не должно быть пустым");
            setIsInputStyle('text textError');
        }
        else {
            setTextDirty(false);
        }
    }

    const sendHandler = () => {

        add();

        setIsStyle('isSuccessfully')
        setIsInputStyle('text');
        setText("");
    }

    const add = () => {
        console.log(addTag);
        setAddTag([...addTag, text]);
    }

    const deleteTag = (indexDeleteTag) => {
        setAddTag(addTag.filter((element, index) => {
            if (indexDeleteTag === index) {
                return false;
            }
            return true;
        })
        )
    }

    const focusHandler = () => {
        setTextDirty(false);
        setIsInputStyle('text');
    }

    return (
        <div className='container'>
            <div className='main'>
                <div className='form' >
                    <input
                        className={isInputStyle}
                        type="text"
                        value={text}
                        onChange={setTextHandler}
                        onBlur={blurHandler}
                    />
                    <input
                        className='submit'
                        type="submit"
                        onClick={sendHandler}
                        disabled={text.length === 0 ? true : false}
                    />
                </div>
                {textDirty && <div className={isStyle}>{textInfo}</div>}
            </div>
            <div className='content'>
                {addTag.map((item, index) => {
                    return (
                        <div className='tagCont'>
                            <div className='textTag'>{item}</div>
                            <div className='btnTag'>
                                <button onClick={() => deleteTag(index)}>x</button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

export default Form;