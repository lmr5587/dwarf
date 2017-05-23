import React, { Component } from 'react'
import './Article.css'
import Articlelinks from'./Articlelinks'
import Author from'./Author'
import Articletext from'./Articletext'
class Article extends Component{
    render(){
        return (
            
          <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <Author/>
            <section className="article-body">
              <Articletext/>
            </section>

            <Articlelinks/>
          </div>
        )
    }
}
export default Article