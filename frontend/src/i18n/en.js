const en = {
  common: {
    or: '或',
    cancel: '取消',
    reset: '重置',
    save: '保存',
    search: '搜索',
    edit: '编辑',
    remove: '移除',
    new: '添加',
    export: '导出到 Excel',
    noDataToExport: 'No data to export',
    import: '导入',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: '确定吗？',
    view: '查看',
    destroy: '删除',
    mustSelectARow: 'Must select a row',
    confirm: '确定',
  },

  app: {
    title: '图书馆',
  },

  entities: {
    loan: {
      name: '借还记录',
      label: '借书',
      menu: '借书',
      exporterFileName: 'loan_export',
      list: {
        menu: '借书',
        title: '借书',
      },
      emailAll: {
        label: 'Send Reminder via Email',
        success: 'Email(s) sent successfully',
      },
      create: {
        success: 'Loan saved successfully',
      },
      update: {
        success: 'Loan saved successfully',
      },
      destroy: {
        success: 'Loan deleted successfully',
      },
      destroyAll: {
        success: 'Loan(s) deleted successfully',
      },
      edit: {
        title: 'Edit Loan',
      },
      fields: {
        id: 'Id',
        book: '书名',
        member: '用户',
        issueDateRange: '发起时间',
        issueDate: '发起时间',
        dueDateRange: '截止时间',
        dueDate: '截止时间',
        returnDateRange: '归还时间',
        returnDate: '归还时间',
        status: '状态',
        createdAt: '创建时间',
        updatedAt: '更新时间',
        createdAtRange: '创建时间',
      },
      enumerators: {
        status: {
          inProgress: '在借',
          overdue: '超期',
          closed: '关闭',
        },
      },
      new: {
        title: '发起借书',
      },
      view: {
        title: '查看借书记录',
      },
      importer: {
        title: '导入',
        fileName: 'loan_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
      validation: {
        bookOutOfStock: '抱歉，暂时没的借。',
      },
    },

    book: {
      name: '图书',
      label: '图书',
      menu: '图书',
      exporterFileName: 'book_export',
      list: {
        menu: '图书',
        title: '图书',
      },
      create: {
        success: 'Book saved successfully',
      },
      update: {
        success: 'Book saved successfully',
      },
      destroy: {
        success: 'Book deleted successfully',
      },
      destroyAll: {
        success: 'Book(s) deleted successfully',
      },
      edit: {
        title: '编辑图书',
      },
      fields: {
        id: 'Id',
        isbn: 'ISBN',
        title: '书名',
        author: '作者',
        numberOfCopiesRange: '数目',
        numberOfCopies: '数目',
        stockRange: '库存',
        stock: '库存',
        images: '封面',
        status: '状态',
        createdAt: '创建时间',
        updatedAt: '更新时间',
        createdAtRange: '创建时间',
      },
      enumerators: {
        status: {
          available: '在库',
          unavailable: '没有库存',
        },
      },
      new: {
        title: '加入新书',
      },
      view: {
        title: '查看图书',
      },
      importer: {
        title: '导入图书',
        fileName: 'book_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    profile: {
      title: '编辑档案',
      success: '编辑成功',
    },
    createAnAccount: '创建帐号',
    rememberMe: '记住我',
    forgotPassword: '忘记密码',
    signin: '登陆',
    signup: '注册',
    signout: '登出',
    alreadyHaveAnAccount:
      '已有帐号了？登陆吧。',
    signinWithAnotherAccount:
      '换个帐号登陆。',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email sent successfully`,
    passwordResetEmailSuccess: `Password reset email sent successfully`,
    passwordResetSuccess: `Password changed successfully`,
    verifyEmail: {
      success: 'Email successfully verified',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    librarian: {
      label: '图书管理员',
      description: '所有资源',
    },
    member: {
      label: '用户',
      description: '用户资源',
    },
  },

  iam: {
    title: '用户',
    menu: '用户',
    disable: '禁止',
    disabled: '禁止',
    enabled: '允许',
    enable: '允许',
    doEnableSuccess: 'User enabled successfully',
    doDisableSuccess: 'User disabled successfully',
    doDisableAllSuccess: 'User(s) disabled successfully',
    doEnableAllSuccess: 'User(s) enabled successfully',
    doAddSuccess: 'User(s) saved successfully',
    doUpdateSuccess: 'User saved successfully',
    viewBy: 'View By',
    用户: {
      name: '用户',
      label: '用户',
      exporterFileName: '导出用户信息',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    roles: {
      label: '角色',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    edit: {
      title: '编辑用户',
    },
    new: {
      title: '添加',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: '查看',
      activity: '活动',
    },
    importer: {
      title: '导入用户',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own librarian permission`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Uid',
      avatars: '头像',
      email: 'Email',
      emails: 'Email(s)',
      fullName: '姓名',
      firstName: '名',
      lastName: '姓',
      status: '状态',
      disabled: '禁止',
      phoneNumber: '电话',
      role: '角色',
      createdAt: '创建时间',
      updatedAt: '更新时间',
      roleUser: '角色',
      roles: '角色',
      createdAtRange: '创建时间',
      password: '密码',
      rememberMe: '记住我',
    },
    enabled: '允许',
    disabled: '禁止',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
  },

  auditLog: {
    menu: '日志',
    title: '日志',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'Email',
    },
  },
  settings: {
    title: '设置',
    menu: '设置',
    save: {
      success:
        'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: '主题',
      loanPeriodInDays: '借书期限（日）',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  home: {
    menu: '主页',
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
      invalid: '${path} must be a number',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: '上传',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
