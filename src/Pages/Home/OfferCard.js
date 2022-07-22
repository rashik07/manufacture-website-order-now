import React from 'react';
import { Card, Col, Layout, Row } from 'antd';
const { Header, Content, Footer } = Layout;

const OfferCard = () => {
    return (
        <div>
       

                    <Row gutter={16}>
                        <Col xs={{ span: 24 }} lg={{ span: 8 }} >
                            <Card title="24/7 Support" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "#fff" }}>
                                Our customer support team is available 24/7 and can respond to your orders, inquiries, and product questions within 12 hours.
                            </Card>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 8 }} >
                            <Card title="Fast Turnarounds" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "#fff" }}>
                                We can arrange land, sea, and air delivery to ensure a quick turnaround of your orders.
                            </Card>
                        </Col>
                        <Col xs={{ span: 24 }} lg={{ span: 8 }} >
                            <Card title="Comprehensive Warranty Coverage" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "#fff" }}>
                                We can replace any defective components immediately and without any hassle.
                            </Card>
                        </Col>

                    </Row>
            
        </div>
    );
};

export default OfferCard;