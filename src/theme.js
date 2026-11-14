// antd 主题: 主题色紫色 #6652d1, Link 与 Typography 同步使用该色
export const PRIMARY = '#6652d1';

export const theme = {
    token: {
        colorPrimary: PRIMARY,
        colorLink: PRIMARY,
        colorLinkHover: '#7d6cd9',
        colorLinkActive: '#5341b8',
        borderRadius: 10
    },
    components: {
        Progress: {
            defaultColor: PRIMARY
        },
        Typography: {
            colorLink: PRIMARY,
            colorLinkHover: '#7d6cd9',
            colorLinkActive: '#5341b8'
        }
    }
};
