      .article
        .card
          .card-header.color-white.no-border
            .title-musk
              span 标题
            img(src="http://placeholder.qiniudn.com/516x178")
          .card-content 
            .card-footer
              span 作者：
                span.author 你好
              span.time 2015.10.10
            .card-content-inner 
              p Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...


              .article {
                .card {
                  margin: 10px 0;
                }
                .card-header {
                  background-size: 100% 100%;
                  height: 122px;
                  padding: 0;
                  position: relative;
                  
                  .title-musk {
                    position: absolute;
                    bottom: 0px;
                    width: 100%;
                    .font(16);
                    background-color: #000;        
                    opacity: 0.8;
                    padding: 0 10px;
                  }
                }
                
                .card-content {
                  padding: 0 10px 10px; 
                  color: #A9A9A9;      
                }
                .card-footer {
                  padding: 0;
                  min-height: 22px;
                  color: #A9A9A9;
                  
                  .author {
                    color: #7C7C7C;
                  }
                }
                .card-content-inner {
                  padding: 0;
                }
                
                img {
                  width: 100%;
                  height: 100%;
                }
                
              }         