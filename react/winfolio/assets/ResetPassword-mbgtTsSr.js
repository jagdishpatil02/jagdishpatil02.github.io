import{c as d,r as m,j as e,A as c,S as u}from"./index-CQubcW8V.js";import{O as x}from"./OuterHeader-CyPkt9WC.js";import{Q as f,B as l}from"./react-toastify.esm-4fkBAmLB.js";import{u as h,c as p,a as b}from"./index.esm-BzGNXZDN.js";const N=()=>{const i=d(u,c),[o,a]=m.useState(!1),s=h({initialValues:{name:"",email:"",password:"",confirmPassword:""},validationSchema:p({email:b().email("Invalid email address").required("Email is required")})}),r=async n=>{n.preventDefault(),a(!0);const{data:g,error:t}=await i.auth.resetPasswordForEmail(s.values.email);t?(a(!1),l.error(t.message)):(a(!1),l.success("We've sent a password reset link to your email address. Please check your inbox (including spam folder) to complete the reset."))};return e.jsx("div",{children:e.jsxs("div",{className:"py-16",children:[e.jsx(x,{}),e.jsx("div",{className:"flex items-center justify-center ",children:e.jsxs("div",{className:"bg-white px-8 py-6 rounded-lg shadow-md w-full max-w-md  border-2 text-left mx-4",children:[e.jsx("h2",{className:"text-2xl text-center font-bold mb-6",children:"Reset Password"}),e.jsxs("form",{id:"registerhtmlForm",onSubmit:r,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"email",className:"block text-gray-700 text-sm font-bold mb-2 text-left",children:"Email Address"}),e.jsx("input",{type:"email",id:"email",name:"email",value:s.values.email,onChange:s.handleChange,onBlur:s.handleBlur,className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0}),e.jsx("span",{id:"emailError",className:"text-red-500 text-sm ",children:s.touched.email&&s.errors.email})]}),e.jsx("button",{disabled:o,onClick:r,type:"submit",className:"bg-black 0 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 flex justify-end items-end",children:"Change Password"})]})]})}),e.jsx(f,{})]})})};export{N as default};
