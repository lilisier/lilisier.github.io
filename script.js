document.addEventListener('DOMContentLoaded', function() {
    // 初始化思维导图
    const mind = new MindElixir({
        el: '#map',
        direction: MindElixir.LEFT,
        data: {
            nodeData: {
                topic: '我的个人经历',
                children: [
                    {
                        topic: '公司了解',
                        children: [
                            { topic: '公司愿景' },
                            { topic: '企业文化' },
                            { topic: '发展历程' },
                            { topic: '主要业务' }
                        ]
                    },
                    {
                        topic: '应聘岗位',
                        children: [
                            { topic: '岗位职责' },
                            { topic: '所需技能' },
                            { topic: '发展空间' },
                            { topic: '我的匹配度' }
                        ]
                    },
                    {
                        topic: '实习经历',
                        children: [
                            { topic: '公司A' },
                            { topic: '公司B' },
                            { topic: '主要成就' },
                            { topic: '技能提升' }
                        ]
                    },
                    {
                        topic: 'AI培训经历',
                        children: [
                            { topic: '培训课程' },
                            { topic: '实践项目' },
                            { topic: '技术掌握' },
                            { topic: '个人成长' }
                        ]
                    }
                ]
            }
        },
        draggable: true,
        contextMenu: true,
        toolBar: true,
        nodeMenu: true,
        keypress: true,
        locale: 'zh_CN',
        theme: {
            name: 'primary',
            randomColor: false,
            color: '#2c3e50',
            colorArray: ['#2c3e50', '#3498db', '#e74c3c', '#2ecc71', '#f1c40f']
        }
    });

    // 初始化思维导图
    mind.init();

    // 添加缩放控制
    const zoomIn = document.createElement('button');
    zoomIn.textContent = '+';
    zoomIn.className = 'zoom-btn zoom-in';
    zoomIn.onclick = () => mind.zoomIn();

    const zoomOut = document.createElement('button');
    zoomOut.textContent = '-';
    zoomOut.className = 'zoom-btn zoom-out';
    zoomOut.onclick = () => mind.zoomOut();

    document.querySelector('#map').appendChild(zoomIn);
    document.querySelector('#map').appendChild(zoomOut);
}); 