/**
 * @fileoverview 
 * @author liuduan
 * @Date 2020-06-25 11:21:44
 * @LastEditTime 2020-06-26 17:06:53
 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function About(props) {
    useEffect(() => {
        if (!props.aboutData) {
            console.log('执行init');
            init();
        }
    }, []);

    function init() {
        fetch('http://localhost:6027/api/about')
            .then(res => res.json())
            .then(res => {
                props.updateAboutData(res.data);
                return res;
            })
            .catch(e => e);
    }

    return (
        <div>
            <h2>About</h2>
            <p>{props.aboutData}</p>
        </div>
    );
}

const updateAboutData = (payload) => {
    return {
        type: 'UPDATE_ABOUT_DATA',
        payload,
    }
}

About.loadData = (store) => {
    return fetch('http://localhost:6027/api/about')
        .then(res => res.json())
        .then(res => {
            store.dispatch(updateAboutData(res.data));
            return res;
        })
        .catch(e => e);
}

function mapStateToProps(state) {
    return {
        aboutData: state.aboutData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateAboutData: (payload) => {
            dispatch(updateAboutData(payload));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);