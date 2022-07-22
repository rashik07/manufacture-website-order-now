import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';

const Footers = () => {
    const { Header, Content, Footer } = Layout;
    
    return (
        <div>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </div>
    );
};

export default Footers;